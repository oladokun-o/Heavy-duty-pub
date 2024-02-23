import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/core/interfaces/cart.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = JSON.parse(localStorage.getItem('cartItems') as string) || [];

  constructor(
    public activeModal: NgbActiveModal,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(c => c.id !== item.id);
    this.updateCart();
  }

  findSelectedPriceAmount(prices: any[]): number {
    let foundPrice = prices.find((pr: any) => pr.selected);
    return foundPrice.value;
  }

  updateCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  checkingout: boolean = false;
  checkout() {
    if (this.cartItems.length > 0) {
      this.checkingout = true;

      setTimeout(() => {
        this.checkingout = false;
        this.activeModal.close();
        this.toastr.success("Your order has been checked out successfully!");
        this.emptyCart();
      }, 3000);
    }
  }

  emptyCart() {
    this.cartItems = [];
    this.updateCart();
  }

  getSubTotal(): number {
    return this.cartItems.reduce((total, item) => {
      return total + (item.item.amount ? item.item.amount : ((item.item.qty ?? 0) * (item.item.price ?? 0)));
    }, 0);
  }

  clearCart() {
    this.emptyCart();
  }

}
