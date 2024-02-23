import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/core/interfaces/cart.interface';
import { AsphaltProduct, Equipment, Haulage } from 'src/app/core/interfaces/products.interface';
import { EquipmentsList } from 'src/app/core/mocks/equipments.mock';
import { ShoppingCartComponent } from '../cart/modals/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  constructor(
    private toastr: ToastrService, private modalService: NgbModal) { }

  Equipments: any[] = EquipmentsList.map(equipments => {
    return {
      ...equipments,
      qty: 1,
      prices: this.removeDefaultFromObject(equipments.prices)
    }
  });

  ngOnInit(): void { }

  handlePriceChange(event: any, product: any): void {
    product.amount = event.value;
    product.prices.forEach((p: any) => p.selected = false);
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
