import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuDrinksComponent } from './main/components/menu-drinks/menu-drinks.component';
import { MenuFoodComponent } from './main/components/menu-food/menu-food.component';
import { AboutComponent } from './main/pages/about/about.component';
import { CafeComponent } from './main/pages/cafe/cafe.component';
import { ContactComponent } from './main/pages/contact/contact.component';
import { HomeComponent } from './main/pages/home/home.component';
import { ViewProductComponent } from './shop/pages/view-product/view-product.component';


const routes: Routes = [
  {path: '', loadChildren: ()=> import('./main/main-routing.module').then(m => m.MainRoutingModule)},
  {path: 'shop', loadChildren: ()=> import('./shop/shop-routing.module').then(m => m.ShopRoutingModule)},
  {path: 'shop/product/:id', component: ViewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
