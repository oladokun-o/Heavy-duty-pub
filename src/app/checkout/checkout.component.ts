import { Component, OnInit } from '@angular/core';
import { NavList } from '../core/interfaces/nav.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {

  pages: NavList[] = [
    {
      label: 'Login',
      route: 'login',
      // icon: 'assets/img/user.svg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
