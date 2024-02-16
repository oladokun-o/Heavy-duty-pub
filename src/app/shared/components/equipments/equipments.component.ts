import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/core/interfaces/products.interface';
import { EquipmentsList } from 'src/app/core/mocks/equipments.mock';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  constructor() { }

  Equipments: Equipment[] = EquipmentsList;

  ngOnInit(): void { }

}
