import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../interfaces/Products';
import { CartService } from '../../services/cart.service';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  faShoppingBag = faShoppingBag;
  products: Product[] = [];

  constructor(private shop: ShopService, public cart: CartService) { }

  ngOnInit(): void {
    this.shop.getAllProducts()
      .subscribe(data => {
        const filter= data.filter(item => item.type ==='Filter');
        this.products = filter;
      })
  }

}
