import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/Products';
import { CartService } from '../../services/cart.service';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];


  constructor(public shop: ShopService, public cart: CartService) {}

  ngOnInit(): void {
    this.cartProducts = this.cart.cartProducts
  }

  getTotal(): number {
    let total = 0;
    for (const item of this.cartProducts) {
      total += Number(item.price) * item.quantity;
    }
    return total;
  }

}
