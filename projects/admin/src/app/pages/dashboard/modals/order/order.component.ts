import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Order, Product } from 'projects/admin/src/app/core/interfaces/orders.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order!: Order;
  form!: FormGroup;

  get products() {
    return this.form.get('products') as FormArray;
  }

  order_status = [
    'pending',
    'processing',
    'completed',
    'cancelled',
    'shipped',
    'delivered'
  ]

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    if (this.order) this.setForm();
  }

  setForm() {
    this.form = new FormGroup({
      products: new FormArray([]),
      quantity: new FormControl(this.order.quantity),
      status: new FormControl(this.order.status),
      total_price: new FormControl(this.order.total_price)
    });

    this.order.products.forEach(product => {
      const productFormGroup = new FormGroup({
        name: new FormControl(product.name),
        qty: new FormControl(product.qty),
        amount: new FormControl(product.amount),
        price: new FormControl(product.price ? product.price : product.amount / product.qty)
      });
      (this.form.get('products') as FormArray).push(productFormGroup);
    });
  }

  handleQtyChange(productIndex: number, value: string): void {
    // Convert value to a number
    const qtyValue = Number(value);

    // Get the form array
    const productArray = this.form.get('products') as FormArray;

    // Get the control at the specified index
    const productControl = productArray.at(productIndex) as FormGroup;

    // Update the quantity of the specified product
    productControl.get('qty')?.setValue(qtyValue);

    // Recalculate the total price based on the updated quantity
    const product = this.order.products[productIndex];

    // Recalculate amount
    product.price = product.price ? product.price : product.amount / product.qty;

    // Update product quantity
    product.qty = qtyValue;

    product.amount = product.qty * product.price;

    this.form.get('total_price')

    // Update amount control value
    productControl.get('amount')?.setValue(product.amount);

    // Recalculate and update total price
    let totalPrice = 0;
    this.order.products.forEach((prod) => {
        totalPrice += prod.amount;
    });

    // Update total price control in the form
    this.form.get('total_price')?.setValue(totalPrice);
  }

}
