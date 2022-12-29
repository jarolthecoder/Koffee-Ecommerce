import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../interfaces/Products';
import { CartService } from '../../services/cart.service';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  faShoppingBag = faShoppingBag;
  products: Product[] = [];

  constructor(private shop: ShopService, public cart: CartService) { }

  ngOnInit(): void {
    this.shop.getAllProducts()
      .subscribe(data => {
        this.products = data;
      })
  }


}
