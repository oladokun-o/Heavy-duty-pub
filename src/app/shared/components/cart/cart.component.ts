import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { CartItem } from 'src/app/core/interfaces/cart.interface';
import { ShoppingCartComponent } from './modals/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cartItems: CartItem[] = JSON.parse(localStorage.getItem('cartItems') as string) || [];
  private timerSubscription!: Subscription;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    // Start the timer subscription on component initialization
    this.startTimer();
  }

  ngOnDestroy(): void {
    // Unsubscribe from the timer subscription to avoid memory leaks
    this.stopTimer();
  }

  updateCart(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') as string) || [];
  }

  openShoppingCart(): void {
    const ref = this.modalService.open(ShoppingCartComponent, {
      centered: true,
      size: "lg",
      backdrop: 'static'
    });
    ref.closed.subscribe(() => this.updateCart());
    ref.dismissed.subscribe(() => this.updateCart());
  }

  private startTimer(): void {
    // Check the length of cartItems every 5 seconds
    this.timerSubscription = interval(5000).subscribe(() => {
      this.updateCart();
    });
  }

  private stopTimer(): void {
    // Unsubscribe from the timer subscription
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

}
