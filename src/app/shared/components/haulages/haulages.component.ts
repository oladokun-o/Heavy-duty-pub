import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/core/interfaces/cart.interface';
import { Haulage } from 'src/app/core/interfaces/products.interface';
import { MockHaulages } from 'src/app/core/mocks/haulages.mock';
import { ShoppingCartComponent } from '../cart/modals/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-haulages',
  templateUrl: './haulages.component.html',
  styleUrls: ['./haulages.component.css']
})
export class HaulagesComponent implements OnInit {

  Haulages: Haulage[] = MockHaulages;

  constructor(
    public toastr: ToastrService,
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  @Input() hideHead: boolean = false;

  toggleDescription(el: HTMLElement) {
    if (el.classList.contains('text-truncate')) {
      el.classList.remove('text-truncate');
    } else {
      el.classList.add('text-truncate');
    }
  }

  inc(product: Haulage) {
    if (product.qty !== undefined) {
        product.qty++;
        let price = product.price as number;
        let amount = price * product.qty;
        product.amount = amount;
    } else {
      console.error('Invalid product or quantity property missing.');
    }
  }

  dec(product: Haulage) {
    if (product.qty !== undefined && product.qty > 1) {
        product.qty--;
        let price = product.price as number;
        let amount = price * product.qty;
        product.amount = amount;
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

  returnToDefault(product: Haulage) {
    product.qty = 1;
    product.amount = product.qty * (product?.price as number);
  }

}
