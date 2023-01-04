import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  navActive!: boolean;

  constructor() { }

  toggleNav() {
    const topHeader = document.querySelector('#main-header') as HTMLElement;
    const mobileNav = document.querySelector('#mobile-navbar') as HTMLElement;
    const toggleBar = document.querySelectorAll('.bar');
    const navigation = document.querySelector('.navigation-mobile') as HTMLElement;
    const linkMobile = document.querySelectorAll('.navigation-mobile .nav-item');
    const contactNav = document.querySelector('.contact-info-mobile') as HTMLElement;
    const socialLinkBlock = document.querySelector('.social-media-mobile') as HTMLElement;

    if(!this.navActive) {
      this.navActive = true;
      topHeader.classList.toggle('nav-active');
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
      setTimeout(()=> {
        topHeader.classList.remove('nav-active')
      }, 500);
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

