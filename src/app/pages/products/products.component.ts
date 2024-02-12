import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  view: 'grid' | 'list' = 'grid';

  changeView(view: 'grid' | 'list'): void {
    this.view = view;
  }
}
