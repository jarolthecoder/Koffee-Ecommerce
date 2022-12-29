import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../interfaces/Products';
import { CartService } from '../../services/cart.service';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent implements OnInit {
  faShoppingBag = faShoppingBag;
  products: Product[] = [];

  constructor(private shop: ShopService, public cart: CartService) { }

  ngOnInit(): void {
    this.shop.getAllProducts()
      .subscribe(data => {
        const merchandise = data.filter(item => item.type ==='Merchandise');
        this.products = merchandise;
      })
  }

}
