import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuDrinksComponent } from "./components/menu-drinks/menu-drinks.component";
import { MenuFoodComponent } from "./components/menu-food/menu-food.component";
import { AboutComponent } from "./pages/about/about.component";
import { CafeComponent } from "./pages/cafe/cafe.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'cafe', component: CafeComponent},
	{path: 'cafe/drinks', component: MenuDrinksComponent},
	{path: 'cafe/food', component: MenuFoodComponent},
  	{path: 'contact', component: ContactComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }