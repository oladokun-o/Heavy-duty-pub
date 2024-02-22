import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartDetails, CartItem } from 'src/app/core/interfaces/cart.interface';
import { AsphaltProduct, Equipment, Haulage } from 'src/app/core/interfaces/products.interface';
import { DeliveryComponent } from '../modals/delivery/delivery.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  cartItems: CartItem[] = JSON.parse(localStorage.getItem('cartItems') as string) || [];
  cartDetails: CartDetails = JSON.parse(localStorage.getItem('cartDetails') as string) || null;

  constructor(
    private modalService: NgbModal
  ) {
    if (!this.cartDetails) {
      setTimeout(() => {
        this.openDeliveryLocationModal();
      }, 3000);
    }
  }

  ngOnInit(): void { }

  getSubTotal(): number {
    return this.cartItems.reduce((total, item) => {
      return total + (item.item.amount ? item.item.amount : ((item.item.qty ?? 0) * (item.item.price ?? 0)));
    }, 0);
  }

  openDeliveryLocationModal() {
    const ref = this.modalService.open(DeliveryComponent, {
      centered: true,
      backdrop: "static"
    });
    ref.closed.subscribe(() => this.getCartDetails());
  }

  getCartDetails() {
    this.cartDetails = JSON.parse(localStorage.getItem('cartDetails') as string);
  }

  inc(product: Equipment | AsphaltProduct | Haulage) {
    if ('qty' in product && product.qty) {
      product.qty++;
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
      console.error('Invalid product or quantity property missing.');
    }
  }

  dec(product: Equipment | AsphaltProduct | Haulage) {
    if ('qty' in product && product.qty !== undefined && product.qty > 0) {
      product.qty--;
      if ('prices' in product && product.prices) {
        const foundPrice = (product.prices as unknown as any[]).find(pr => pr.selected);
        if (foundPrice) {
          product.amount = product.qty * foundPrice.value;
        }
      } else {
        console.error('Invalid product or quantity property missing.');
      }
    } else {
      console.error('Invalid product or quantity property missing or quantity is already at minimum.');
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


}
