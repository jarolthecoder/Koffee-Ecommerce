import { Component, Input, OnInit} from '@angular/core';
import { faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/shop/services/cart.service';
import { ShopService } from 'src/app/shop/services/shop.service';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faShoppingbag = faShoppingBag;
  faUser = faUser;
  quantity: number = 0;
  // Properties for header style toggle based on url
  headerDark!: boolean;
  @Input() headerView!: boolean;
  
  constructor(
    public shared: SharedService, 
    public shop: ShopService, 
    public cart: CartService) { 
  }
 
  ngOnInit(): void {
    this.headerDark = this.headerView;
  }

  toggleNav() {
    this.shared.toggleNav();
  }

}
