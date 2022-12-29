import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopMainComponent } from './pages/shop-main/shop-main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { AppRoutingModule } from '../app-routing.module';
import { EspressoComponent } from './pages/espresso/espresso.component';
import { FilterComponent } from './pages/filter/filter.component';
import { MerchandiseComponent } from './pages/merchandise/merchandise.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { ShopRoutingModule } from './shop-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ShopMainComponent,
    NavigationComponent,
    AllProductsComponent,
    EspressoComponent,
    FilterComponent,
    MerchandiseComponent,
    ViewProductComponent,
    CartComponent
  ],
  exports: [
    ShopMainComponent,
    AllProductsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
