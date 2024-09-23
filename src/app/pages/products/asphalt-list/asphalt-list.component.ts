import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/core/interfaces/cart.interface';
import { AsphaltProduct, Brand } from 'src/app/core/interfaces/products.interface';
import { MockAsphalts } from 'src/app/core/mocks/asphalts.mock';
import { ProductsService } from 'src/app/core/services/products.service';
import { ShoppingCartComponent } from 'src/app/shared/components/cart/modals/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-asphalt-list',
  templateUrl: './asphalt-list.component.html',
  styleUrls: ['./asphalt-list.component.css']
})
export class AsphaltListComponent implements OnInit {

  asphaltProducts: AsphaltProduct[] = [];

  @Input() anInput: boolean = false;

  constructor(
    private toastr: ToastrService,
    private modalService: NgbModal,
    private productsService: ProductsService
  ) {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts("asphalts").subscribe((products) => {
      // Check the qty and minQty properties of each product
      products.forEach(product => this.checkProductForMinQty(product));

      this.asphaltProducts = products;
    });
  }

  checkProductForMinQty(product: AsphaltProduct): void {
    // if the qty and minQty properties are defined and the qty is less than the minQty
    if (product.qty !== undefined && product.minQty !== undefined && product.qty < product.minQty) {
      product.qty = product.minQty;
    };

    // If the qty property is undefined, set it to 1
    if (product.qty === undefined || product.qty < 1) {
      product.qty = 1;
    }

    // if no brand is selected then select the first brand using this.handleBrandChange
    if (product.brand && !product.brand.some(b => b.selected)) {
      this.handleBrandChange(product.brand[0], product);
    }
  }

  ngOnInit(): void {
  }

  view: 'grid' | 'list' = sessionStorage.getItem('productsView') as 'grid' | 'list' || 'grid';

  changeView(view: 'grid' | 'list'): void {
    this.view = view;
    sessionStorage.setItem('productsView', this.view);
  }

  handleBrandChange(brand: Brand, product: AsphaltProduct): void {
    product.brand?.forEach(b => b.selected = false);
    brand.selected = true;

    if (product.qty !== undefined && product.qty > 0) {
      product.amount = brand.price * product.qty;
      product.price = brand.price;
    } else {
      product.amount = brand.price;
      product.price = brand.price;
    }
    product.selectedBrand = brand;
  }

  toggleDescription(el: HTMLElement) {
    if (el.classList.contains('text-truncate')) {
      el.classList.remove('text-truncate');
    } else {
      el.classList.add('text-truncate');
    }
  }

  getSelectedBrand(product: AsphaltProduct): Brand | undefined {
    return product.brand?.find(b => b.selected);
  }

  Number = Number;

  inc(product: AsphaltProduct) {
    this.updateIntQuantity(product, 'increment');
  }

  dec(product: AsphaltProduct) {
    this.updateIntQuantity(product, 'decrement');
  }

  /**
   * Updates the product's quantity based on the action (increment or decrement),
   * taking into account minQty, maxQty, and step properties.
   *
   * @param product The product to update
   * @param action 'increment' or 'decrement'
   */
  private updateIntQuantity(product: AsphaltProduct, action: 'increment' | 'decrement') {
    // Ensure the step value is set, default to 1 if not provided
    const step = product.step ?? 1;

    if (product.qty != null) {
      if (action === 'increment') {
        // Increment the quantity, ensuring it doesn't exceed maxQty
        if (product.maxQty != null && product.qty + step > product.maxQty) {
          console.error('Quantity exceeds maximum allowed value.');
          return;
        }
        product.qty += step;
      } else if (action === 'decrement') {
        // Decrement the quantity, ensuring it doesn't go below minQty or 1 (if no minQty is set)
        const minQty = product.minQty ?? 1;
        if (product.qty - step < minQty) {
          console.error('Quantity cannot go below the minimum allowed value.');
          return;
        }
        product.qty -= step;
      }

      // If the product has a brand, find the selected brand's price
      const foundBrand = product.brand
        ? this.asphaltProducts.find(p => p._id === product._id)?.brand?.find(p => p.selected)
        : null;

      // Use the brand's price if available, otherwise use the product's own price
      const price = foundBrand?.price ?? product.price;

      if (price != null) {
        // Update the product amount based on the new quantity and price
        product.amount = product.qty * price;
      } else {
        console.error('Invalid price found for product.');
      }
    } else {
      console.error('Invalid product or quantity property missing.');
    }
  }

  addToCart(product: any) {
    let item: CartItem = {
      id: new Date().toISOString(),
      datetime: new Date(),
      item: product
    };

    // Retrieve cart items from localStorage
    let itemsString = localStorage.getItem('cartItems');
    let items: Array<CartItem> = itemsString ? JSON.parse(itemsString) : [];

    // Add the new item to the items array
    items.push(item);

    // Store the updated items array back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(items));

    this.toastr.success('Item added to cart successfully');
    this.returnToDefault(product);
    this.openShoppingCart();
  }

  openShoppingCart(): void {
    const ref = this.modalService.open(ShoppingCartComponent, {
      centered: true,
      size: "lg",
      backdrop: 'static'
    });
  }

  returnToDefault(product: AsphaltProduct) {
    product.qty = 1;
    product.amount = product.qty * (product?.price as number);

    if (product.brand) {
      product.brand.forEach(price => price.selected = false);
      product.price = undefined;
      product.amount = undefined;
    }
  }

}
