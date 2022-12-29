import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CafeComponent } from './pages/cafe/cafe.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './components/slider/slider.component';
import { MenuDrinksComponent } from './components/menu-drinks/menu-drinks.component';
import { MenuFoodComponent } from './components/menu-food/menu-food.component';
import { RouterModule } from '@angular/router';
import { MenuBlockComponent } from './components/menu-block/menu-block.component';
import { ShopModule } from '../shop/shop.module';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CafeComponent,
    ContactComponent,
    SliderComponent,
    MenuDrinksComponent,
    MenuFoodComponent,
    MenuBlockComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    CafeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    FontAwesomeModule,
    SharedModule,
    ShopModule
  ]
})
export class MainModule { }
