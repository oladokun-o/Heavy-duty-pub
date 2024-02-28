import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'projects/admin/src/app/core/interfaces/orders.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  order_id!: number;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void { }

}
