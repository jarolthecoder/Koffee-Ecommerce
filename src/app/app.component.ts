import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { SharedService } from './shared/services/shared.service';
import { ViewProductComponent } from './shop/pages/view-product/view-product.component';
import { CartService } from './shop/services/cart.service';
import { ShopService } from './shop/services/shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Koffee';
  headerView!: boolean; // Value passed to 'Header' and 'Main Nav' components 
  id: string = '';

  get data():string { return this.shop.productId; } 

  constructor(
    private router: Router, 
    public shop: ShopService,
    public cart: CartService) {}

  ngOnInit(): void {
    // Constantly check the url
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          const arg = this.router.url
          switch (arg) {
            case '/shop/':
            case '/shop/all':
            case '/shop/espresso':
            case '/shop/filter':
            case '/shop/merchandise':
            case `/shop/product/${this.shop.productId}`:
              this.headerView = true;
              break;
            default:
              this.headerView = false;
          }
        }
      });
  }

}
