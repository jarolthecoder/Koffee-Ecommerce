import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/shop/services/cart.service';
import { ShopService } from 'src/app/shop/services/shop.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faShoppingbag = faShoppingBag;
  faUser = faUser;
  navActive!: boolean;
  // Properties for header style toggle based on url
  headerDark!: boolean;
  @Input() headerView!: boolean;
  quantity: number = 0;
  closeNav = () => {
    this.toggleNav()
    
  }
  
  constructor(public shop: ShopService, public cart: CartService) { 
  }
 
  ngOnInit(): void {
    this.headerDark = this.headerView;
  }


  toggleNav() {
    const mobileNav = document.querySelector('#mobile-navbar') as HTMLElement;
    const toggleBar = document.querySelectorAll('.bar');
    const navigation = document.querySelector('.navigation-mobile') as HTMLElement;
    const linkMobile = document.querySelectorAll('.navigation-mobile .nav-item');
    const contactNav = document.querySelector('.contact-info-mobile') as HTMLElement;
    const socialLinkBlock = document.querySelector('.social-media-mobile') as HTMLElement;

    if(!this.navActive) {
      this.navActive = true;
      mobileNav.classList.toggle('nav-active');
      navigation.classList.add('fade-up')
			contactNav.classList.add('fade-up');
			socialLinkBlock.classList.add('fade-up');
      toggleBar.forEach((b)=> b.classList.add('bar-active'));
      linkMobile.forEach((l)=> l.classList.add('fade-up'));
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      
		} else {
      this.navActive = false;
			mobileNav.classList.remove('nav-active');
      navigation.classList.remove('fade-up');
      contactNav.classList.remove('fade-up');
			socialLinkBlock.classList.remove('fade-up');
			toggleBar.forEach((b)=> b.classList.remove('bar-active'));
      linkMobile.forEach((l)=> l.classList.remove('fade-up'));
      document.body.style.position = 'static';
		}
  
  }

}
