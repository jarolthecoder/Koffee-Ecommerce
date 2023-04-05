import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: Product[] = []
  cartQuantity: number = 0;
  cartActive!: boolean;
  subtotal: any;

  constructor() {  
    this.cartProducts = JSON.parse(localStorage.getItem('Cart Items')!) || [] 
    this.cartQuantity = JSON.parse(localStorage.getItem('Items Quantity')!) || []
  }

  // Creates new product in the cart
  addProduct(product: Product) {
    const itemInCart = this.cartProducts.find(item => item.id === product.id)

    if(!itemInCart) {
      this.cartProducts.unshift(product);
      this.cartQuantity++
      localStorage.setItem('Cart Items', JSON.stringify(this.cartProducts));
      localStorage.setItem('Items Quantity', JSON.stringify(this.cartQuantity));
    }
    this.toggleCart();
  }

  // Remove product from the cart (array and localstorage)
  removeItem(product: Product): Product[] {
    const index = this.cartProducts.indexOf(product)
    if (index > -1) { 
      this.cartProducts.splice(index, 1);
      this.cartQuantity--
      
      localStorage.setItem('Cart Items', JSON.stringify(this.cartProducts));
      localStorage.setItem('Items Quantity', JSON.stringify(this.cartQuantity));
    }
 
    return this.cartProducts
  }

   // Toggle Cart Window
  toggleCart() {
    if(!this.cartActive) {
      this.cartActive = true
      document.body.classList.add('no-scroll');
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      this.cartActive = false
      document.body.classList.remove('no-scroll');
      document.body.style.position = 'static';
    }
  }
}
