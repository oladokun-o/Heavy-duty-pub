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
    this.productsService.getProductsFromJson("asphalts").subscribe((products) => {
      this.asphaltProducts = products;
    });
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

  inc(product: AsphaltProduct) {
    if (product.qty !== undefined) {
      if (product.brand) {// Find the selected brand of the product
        const foundBrand = this.asphaltProducts.find(p => p.id === product.id)?.brand?.find(p => p.selected);
        product.qty++;
        if (foundBrand && foundBrand.price !== undefined && product) {
          product.amount = product.qty * foundBrand.price;
        }
      } else {
        product.qty++;
        let price = product.price as number;
        let amount = price * product.qty;
        product.amount = amount;
      }
    } else {
      console.error('Invalid product or quantity property missing.');
    }
  }

  dec(product: AsphaltProduct) {
    if (product.qty !== undefined && product.qty > 1) {
      if (product.brand) {// Find the selected brand of the product
        const foundBrand = this.asphaltProducts.find(p => p.id === product.id)?.brand?.find(p => p.selected);
        product.qty--;
        if (foundBrand && foundBrand.price !== undefined && product) {
          product.amount = product.qty * foundBrand.price;
        }
      } else {
        product.qty--;
        let price = product.price as number;
        let amount = price * product.qty;
        product.amount = amount;
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
