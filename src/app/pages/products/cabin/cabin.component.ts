import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/core/interfaces/cart.interface';
import { AsphaltProduct, Brand, Equipment } from 'src/app/core/interfaces/products.interface';
import { EquipmentsList } from 'src/app/core/mocks/equipments.mock';
import { PortaCabinsEquipmentsList } from 'src/app/core/mocks/porta-cabins.mock';
import { ShoppingCartComponent } from 'src/app/shared/components/cart/modals/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-cabin',
  templateUrl: './cabin.component.html',
  styleUrls: ['./cabin.component.css']
})
export class CabinComponent implements OnInit {
  constructor(
    private toastr: ToastrService, private modalService: NgbModal) { }

  Equipments: any[] = PortaCabinsEquipmentsList.map(equipments => {
    return {
      ...equipments,
      qty: 1,
      prices: this.removeDefaultFromObject(equipments.prices)
    }
  });


  toggleDescription(el: HTMLElement) {
    if (el.classList.contains('text-truncate')) {
      el.classList.remove('text-truncate');
    } else {
      el.classList.add('text-truncate');
    }
  }

  ngOnInit(): void { }

  view: 'grid' | 'list' = sessionStorage.getItem('productsView') as 'grid' | 'list' || 'grid';

  changeView(view: 'grid' | 'list'): void {
    this.view = view;
    sessionStorage.setItem('productsView', this.view);
  }

  handlePriceChange(event: any, product: any): void {
    product.amount = event.value;
    let foundPrice = product.prices.find((pr: any) => pr.label === event.label);
    foundPrice.selected = true;
  }

  findSelectedPrice(prices: any[]): string {
    let foundPrice = prices.find((pr: any) => pr.selected);
    return foundPrice.label;
  }

  findSelectedPriceAmount(prices: any[]): number {
    let foundPrice = prices.find((pr: any) => pr.selected);
    return foundPrice.value;
  }

  Object = Object;
  parseFloat = parseFloat

  removeDefaultFromObject(obj: any): Array<{ label: string, value: number, selected: false }> {
    delete obj.default;
    return Object.keys(obj).map(key => ({ label: key, value: obj[key], selected: false }));
  }

  inc(product: Equipment) {
    if (product.qty !== undefined) {
      if (product.prices) {
        const foundPrice = (product.prices as unknown as any[]).find((pr: any) => pr.selected);
        product.qty++;
        if (foundPrice && foundPrice.value !== undefined && product) {
          product.amount = product.qty * foundPrice.value;
        }
      }
    } else {
      console.error('Invalid product or quantity property missing.');
    }
  }

  dec(product: Equipment) {
    if (product.qty !== undefined) {
      if (product.prices) {
        const foundPrice = (product.prices as unknown as any[]).find((pr: any) => pr.selected);
        product.qty--;
        if (foundPrice && foundPrice.value !== undefined && product) {
          product.amount = product.qty * foundPrice.value;
        }
      }
    } else {
      console.error('Invalid product or quantity property missing.');
    }
  }

  addToCart(product: any) {
    let item: CartItem = {
      id: new Date().toISOString(),
      datetime: new Date(),
      item: product
    };

    // Retrieve cart items from localStorage
    let itemsString = localStorage.getItem('cartItems');
    let items: Array<CartItem> = itemsString ? JSON.parse(itemsString) : [];

    // Add the new item to the items array
    items.push(item);

    // Store the updated items array back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(items));

    this.toastr.success('Item added to cart successfully');
    this.returnToDefault(product);
    this.openShoppingCart();
  }

  openShoppingCart(): void {
    const ref = this.modalService.open(ShoppingCartComponent, {
      centered: true,
      size: "lg",
      backdrop: 'static'
    });
  }

  returnToDefault(product: Equipment) {
    product.amount = undefined;
    product.qty = 1;
    (product.prices as unknown as any[]).forEach(price => price.selected = false);
  }

}
