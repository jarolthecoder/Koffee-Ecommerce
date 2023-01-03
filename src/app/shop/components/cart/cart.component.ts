import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
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


  constructor(
    private http: HttpClient, 
    public shop: ShopService, 
    public cart: CartService) {}

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

  onCheckout() {
    this.http.post('http://localhost:4242/checkout', {
      items: this.cartProducts
    }).subscribe(async (res: any)=> {
      let stripe = await loadStripe('pk_test_51MLDvqD85DBZk3ca65FnykIMQ7VjtsBNvnrK0MFqf3el3yDlqLqoAJUhQH7JQYTie2r3MgYsbsNsbbthq7KnpRVI00vibB8bgT');
      stripe?.redirectToCheckout({
        sessionId: res.id
      });
      this.cartProducts = [];
      localStorage.clear();
    })
  }

}
