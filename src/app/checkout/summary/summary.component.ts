import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartDetails, CartItem, Location } from 'src/app/core/interfaces/cart.interface';
import { AsphaltProduct, Equipment, Haulage } from 'src/app/core/interfaces/products.interface';
import { DeliveryComponent } from '../modals/delivery/delivery.component';
import { Subscription, interval } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDetails } from 'src/app/core/interfaces/user.interface';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from 'src/app/core/services/orders.service';
import { NewOrder, OrderStatus } from 'src/app/core/interfaces/orders.interface';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnDestroy {

  cartItems: CartItem[] = JSON.parse(localStorage.getItem('cartItems') as string) || [];
  cartDetails: CartDetails = JSON.parse(localStorage.getItem('cartDetails') as string) || null;
  private timerSubscription!: Subscription;

  disclaimer: string = 'The final delivery fee will be calculated and confirmed once your order has been received and checked by our team. We strive to provide accurate and competitive delivery fees, and any adjustments will be communicated to you promptly.';

  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    private ordersService: OrdersService
  ) {
    toastr.toastrConfig.preventDuplicates = true;

    if (!this.cartDetails) {
      setTimeout(() => {
        this.openDeliveryLocationModal();
      }, 3000);
    }
  }

  ngOnInit(): void {
    // Start the timer subscription on component initialization
    this.startTimer();
  }

  ngOnDestroy(): void {
    // Unsubscribe from the timer subscription to avoid memory leaks
    this.stopTimer();
  }

  private stopTimer(): void {
    // Unsubscribe from the timer subscription
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private startTimer(): void {
    // Check the length of cartItems every 5 seconds
    this.timerSubscription = interval(5000).subscribe(() => {
      this.getCart();
    });
  }

  getSubTotal(): number {
    return this.cartItems.reduce((total, item) => {
      return total + (item.item.amount ? item.item.amount : ((item.item.qty ?? 0) * (item.item.price ?? 0)));
    }, 0);
  }

  getCart(): void {
    let newcartItems = JSON.parse(localStorage.getItem('cartItems') as string) || [];
    if (JSON.stringify(newcartItems) !== JSON.stringify(this.cartItems)) {
      this.cartItems = newcartItems;
    }
  }

  updateCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(c => c.id !== item.id);
    this.updateCart();
  }

  openDeliveryLocationModal() {
    // const ref = this.modalService.open(DeliveryComponent, {
    //   centered: true,
    //   backdrop: "static"
    // });
    // ref.closed.subscribe(() => this.getCartDetails());
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
    this.updateCart();
  }

  dec(product: Equipment | AsphaltProduct | Haulage) {
    if ('qty' in product && product.qty) {
      product.qty--;
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
    this.updateCart();
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
    this.updateCart();
  }

  countries: Location[] = [
    {
      name: 'Nigeria',
      code: 'NIG'
    }
  ];

  states: Location[] = [
    {
      name: 'Lagos'
    }
  ];

  userDetails: UserDetails | null = JSON.parse(localStorage.getItem('userDetails') as string) || null;
  editable: boolean = !this.userDetails ? true : false;
  userForm: FormGroup = this.userDetails ?
    new FormGroup({
      firstname: new FormControl(this.userDetails.firstname, Validators.required),
      lastname: new FormControl(this.userDetails.lastname, Validators.required),
      email: new FormControl(this.userDetails.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.userDetails.phone, [Validators.required, Validators.minLength(11), Validators.maxLength(13)]),
      address: new FormControl(this.userDetails.address, [Validators.required]),
      state: new FormControl(this.userDetails.state, [Validators.required]),
      country: new FormControl(this.userDetails.country, [Validators.required]),
    })
    : new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(13)]),
      address: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
    });

  toggleEdit() {
    this.editable = !this.editable;
    this.saved = false;
    this.submitted = false;
  }

  saved: boolean = false;
  submitted: boolean = false;
  saveDetails() {
    this.submitted = true;

    console.log(this.userForm.value);

    if (this.userForm?.valid) {
      localStorage.setItem('userDetails', JSON.stringify(this.userForm?.value));
      this.saved = true;
      this.editable = false;
    }
  }

  confirming: boolean = false;

  confirmOrder() {
    if (this.userForm.invalid) {
      this.toastr.info('Please fill in all required fields.');
      this.editable = true;
      const firstInvalidInput = document.querySelector("form")?.querySelector("input.ng-invalid, ng-select.ng-invalid > input");
      if (firstInvalidInput instanceof HTMLInputElement) {
        firstInvalidInput.scrollIntoView({ behavior: "smooth", block: "center" });
        firstInvalidInput.focus();
      }
    } else if (this.cartItems.length === 0) {
      this.toastr.info('Your cart is empty. Please add items before confirming your order.');
    } else {
      // Proceed to confirm the order
      this.confirming = true;

      let totalPrice = this.cartItems.reduce((acc, curr) => {
        if (curr.item.amount !== undefined) {
          return acc + curr.item.amount;
        } else {
          return acc;
        }
      }, 0);

      let totalQuantity = this.cartItems.reduce((acc, curr) => {
        if (curr.item.qty !== undefined) {
          return acc + curr.item.qty;
        } else {
          return acc;
        }
      }, 0);

      let order: NewOrder = {
        customer_name: this.userForm.value.firstname + ' ' + this.userForm.value.lastname,
        address: this.userForm.value.address,
        email: this.userForm.value.email,
        order_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
        phone: this.userForm.value.phone,
        quantity: totalQuantity,
        products: this.cartItems.map(c => {
          let item = c.item;
          return {
            amount: item.amount ? item.amount : item.qty * item!.price,
            name: item.name,
            product_id: item.id,
            qty: item.qty
          } as any
        }),
        total_price: totalPrice,
        status: OrderStatus.Pending
      };
      this.ordersService.createOrder(order).subscribe(
        res => {
          this.confirming = false;
          this.emptyCart();
          this.toastr.success('Your order has been confirmed!');
        },
        err => {
          this.confirming = false;
          this.toastr.error("An error has occurred, please try again");
        }
      );
    }
  }

  emptyCart() {
    this.cartItems = [];
    this.updateCart();
  }

  userDetailsExpanded: boolean = !this.userDetails ? true : false;
  cartExpanded: boolean = false;

  toggleUserDetails(expander: HTMLElement) {
    this.userDetailsExpanded = !this.userDetailsExpanded;
    if (this.cartExpanded) {
      this.cartExpanded = false;
    }
    setTimeout(() => {
      const firstInvalidInput = document.querySelector("form")?.querySelector("input.ng-invalid, ng-select.ng-invalid > input");
      if (firstInvalidInput instanceof HTMLInputElement) {
        firstInvalidInput.scrollIntoView({ behavior: "smooth", block: "center" });
        firstInvalidInput.focus();
      } else window.scrollTo(0, 0);
    }, 500);
  }

  toggleCartDetails(expander: HTMLElement) {
    this.cartExpanded = !this.cartExpanded;
    if (this.userDetailsExpanded) {
      this.userDetailsExpanded = false;
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }


}
