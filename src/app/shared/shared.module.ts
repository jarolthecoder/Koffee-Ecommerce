import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';
import { RouterModule } from '@angular/router';
import { CtaBlockComponent } from './components/cta-block/cta-block.component';
import { TopScrollBtnComponent } from './components/top-scroll-btn/top-scroll-btn.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    MainNavbarComponent,
    MobileNavbarComponent,
    CtaBlockComponent,
    TopScrollBtnComponent,
    SpinnerComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CtaBlockComponent,
    ButtonComponent,
    TopScrollBtnComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
