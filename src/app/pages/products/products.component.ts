import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  view: 'grid' | 'list' = sessionStorage.getItem('productsView') as 'grid' | 'list' || 'grid';

  changeView(view: 'grid' | 'list'): void {
    this.view = view;
    sessionStorage.setItem('productsView', this.view);
  }
}
