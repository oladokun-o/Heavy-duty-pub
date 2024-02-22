import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartDetails, Location } from 'src/app/core/interfaces/cart.interface';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  cartDetails: CartDetails = JSON.parse(localStorage.getItem('cartDetails') as string) || null;

  countries: Location[] = [
    {
      name: 'Nigeria',
      code: 'NIG'
    }
  ];

  country: string = 'Nigeria';
  state: string = 'Lagos';

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void { }

  changeCountry(country: string): void {
    this.country = country;
  }

  changeState(state: string): void {
    this.state = state;
  }

  updateCartDetails() {
    this.cartDetails.deliveryLocation = this.state + ', ' + this.country;
    localStorage.setItem('cartDetails', JSON.stringify(this.cartDetails));
    this.activeModal.close();
  }

}
