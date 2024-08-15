import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { AsphaltProduct, Brand, Equipment, Haulage } from 'src/app/core/interfaces/products.interface';
import { CartItem } from 'src/app/core/interfaces/cart.interface';
import { ShoppingCartComponent } from 'src/app/shared/components/cart/modals/shopping-cart/shopping-cart.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asphalt',
  templateUrl: './asphalt.component.html',
  styleUrls: ['./asphalt.component.css']
})
export class AsphaltComponent implements OnInit {

  product!: AsphaltProduct;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {
    this.getProduct();
  }

  getProduct() {
    this.activatedRoute.params.subscribe(params => {
      const productId = params['id'];
      this.productsService.getProductById("asphalts", productId).subscribe(
        (product: any) => {
          this.product = product;
        },
        error => {
          console.error('Error fetching product:', error);
        }
      );
    });
  }

  ngOnInit(): void {

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
        const foundBrand = this.product.brand?.find(p => p.selected);
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
        const foundBrand = this.product.brand?.find(p => p.selected);
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

  Number = Number;

  updateQuantity(product: Equipment | AsphaltProduct | Haulage, newQuantity: number) {
    if ('qty' in product && newQuantity >= 0) {
      product.qty = newQuantity;
      if ('prices' in product && product.prices) {
        const foundPrice = (product.prices as unknown as any[]).find(pr => pr.selected);
        if (foundPrice) {
          product.amount = product.qty * foundPrice.value;
        }
      } else if ('brand' in product) {
        if (product.brand) {
          const foundBrand = product.brand.find(p => p.selected);
          if (foundBrand && foundBrand.price !== undefined) {
            product.amount = product.qty * foundBrand.price;
          }
        } else {
          let price = product.price as number;
          product.amount = price * product.qty;
        }
      } else if ('price' in product) {
        let price = product.price as number;
        product.amount = price * product.qty;
      }
    } else {
      console.error('Invalid product or quantity property missing or invalid quantity value.');
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
