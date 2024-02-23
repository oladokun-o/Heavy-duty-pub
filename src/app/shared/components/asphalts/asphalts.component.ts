import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/core/interfaces/cart.interface';
import { AsphaltProduct, Brand, Equipment, Haulage } from 'src/app/core/interfaces/products.interface';
import { ShoppingCartComponent } from '../cart/modals/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-asphalts',
  templateUrl: './asphalts.component.html',
  styleUrls: ['./asphalts.component.scss']
})
export class AsphaltsComponent implements OnInit {

  constructor(
    private toastr: ToastrService, private modalService: NgbModal) { }

  asphaltProducts: AsphaltProduct[] = [
    {
      brand: [
        { name: 'NANO ZMA', price: 500000 },
        { name: 'LEVERAGE', price: 250000 },
        { name: 'SEQUIOA', price: 350000 },
        { name: 'LARALEK', price: 400000 },
        { name: 'GATEWAY', price: 500000 },
        { name: 'PW', price: 500000 },
        { name: 'PLATINUM', price: 500000 },
      ],
      imageUrl: 'assets/img/asphalt-2.webp',
      name: 'Asphalt - Binders Course',
      description: `The binder course is an essential layer in asphalt pavement construction,
      providing stability and durability to the road surface. It acts as a binder between the surface course and the base layer, distributing traffic loads
      and preventing water penetration.`,
      price: undefined,
      qty: 1,
      id: 1,
      meta: {
        type: 'ton'
      }
    },
    {
      brand: [
        { name: 'NANO ZMA', price: 500000 },
        { name: 'LEVERAGE', price: 250000 },
        { name: 'SEQUIOA', price: 350000 },
        { name: 'LARALEK', price: 400000 },
        { name: 'GATEWAY', price: 500000 },
        { name: 'PW', price: 500000 },
        { name: 'PLATINUM', price: 500000 }
      ],
      imageUrl: 'assets/img/asphalt-1.jpg',
      name: 'Asphalt - Wearing Course',
      description: `The wearing course, also known as the surface course, is the top layer of asphalt pavement that directly interacts with
      traffic. It provides skid resistance, smoothness, and durability to the road surface, protecting the underlying layers
      from wear and tear.`,
      price: undefined,
      qty: 1,
      id: 2,
      meta: {
        type: 'ton'
      }
    },
    {
      name: 'Bitumen - C.B.E + TERRASIL',
      description: 'Similar to C.B.E bitumen, C.B.E + TERRASIL bitumen is a modified bitumen product that includes additional additives, such as TERRASIL, to further enhance its properties. TERRASIL additives may provide benefits such as improved durability, flexibility, and resistance to rutting.',
      imageUrl: 'assets/img/bitumen-1.jpeg',
      price: 10000,
      meta: {
        weight: '28 ltr',
        usage: 'Enhanced bitumen blend for improved performance',
        type: 'Litre'
      },
      qty: 1,
      id: 3
    },
    {
      name: 'Bitumen - 60/70',
      description: '60/70 bitumen refers to a specific grade of bitumen categorized by its penetration value and softening point. This grade of bitumen is commonly used in road construction for its medium viscosity and suitable temperature range, making it versatile for various asphalt applications.',
      imageUrl: 'assets/img/bitumen-1.jpeg',
      price: 10000,
      meta: {
        weight: '28 ltr',
        usage: 'Versatile bitumen grade for various applications',
        type: 'Litre'
      },
      qty: 1,
      id: 4
    },
    {
      name: 'SURFACE DRESSING',
      imageUrl: 'assets/img/aggregate-1.webp',
      price: 40400,
      description: 'Aggregate suitable for surface applications.',
      meta: {
        usage: 'Surface applications',
        type: 'service'
      },
      qty: 1,
      id: 5
    }
  ];

  @Input() hideHead: boolean = false;

  ngOnInit(): void {

  }

  handleBrandChange(brand: Brand, product: AsphaltProduct): void {
    product.price = brand.price;
    brand.selected = true;
  }

  toggleDescription(el: HTMLElement) {
    if (el.classList.contains('text-truncate')) {
      el.classList.remove('text-truncate');
    } else {
      el.classList.add('text-truncate');
    }
  }

  inc(product: AsphaltProduct) {
    if (product.qty !== undefined) {
      if (product.brand) {// Find the selected brand of the product
        const foundBrand = this.asphaltProducts.find(p => p.id === product.id)?.brand?.find(p => p.selected);
        product.qty++;
        if (foundBrand && foundBrand.price !== undefined && product) {
          product.amount = product.qty * foundBrand.price;
        }
      } else {
        product.qty++;
        let price = product.price as number;
        let amount = price * product.qty;
        product.amount = amount;
      }
    } else {
      console.error('Invalid product or quantity property missing.');
    }
  }

  dec(product: AsphaltProduct) {
    if (product.qty !== undefined && product.qty > 1) {
      if (product.brand) {// Find the selected brand of the product
        const foundBrand = this.asphaltProducts.find(p => p.id === product.id)?.brand?.find(p => p.selected);
        product.qty--;
        if (foundBrand && foundBrand.price !== undefined && product) {
          product.amount = product.qty * foundBrand.price;
        }
      } else {
        product.qty--;
        let price = product.price as number;
        let amount = price * product.qty;
        product.amount = amount;
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

  returnToDefault(product: AsphaltProduct) {
    product.qty = 1;
    product.amount = product.qty * (product?.price as number);

    if (product.brand) {
      product.brand.forEach(price => price.selected = false);
      product.price = undefined;
      product.amount = undefined;
    }
  }

}
