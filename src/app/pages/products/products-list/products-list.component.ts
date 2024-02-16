import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/core/interfaces/products.interface';
import { EquipmentsList } from 'src/app/core/mocks/equipments.mock';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  Equipments: Equipment[] = EquipmentsList;

  view: 'grid' | 'list' = sessionStorage.getItem('productsView') as 'grid' | 'list' || 'grid';

  changeView(view: 'grid' | 'list'): void {
    this.view = view;
    sessionStorage.setItem('productsView', this.view);
  }
}
