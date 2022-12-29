import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../interfaces/Products';
import { CartService } from '../../services/cart.service';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-espresso',
  templateUrl: './espresso.component.html',
  styleUrls: ['./espresso.component.css']
})
export class EspressoComponent implements OnInit {
  faShoppingBag = faShoppingBag;
  products: Product[] = [];

  constructor(private shop: ShopService, public cart: CartService) { }

  ngOnInit(): void {
    this.shop.getAllProducts()
      .subscribe(data => {
        const espresso = data.filter(item => item.type ==='Espresso');
        this.products = espresso;
      })
  }

}
