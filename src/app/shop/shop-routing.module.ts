import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllProductsComponent } from "./pages/all-products/all-products.component";
import { EspressoComponent } from "./pages/espresso/espresso.component";
import { FilterComponent } from "./pages/filter/filter.component";
import { MerchandiseComponent } from "./pages/merchandise/merchandise.component";
import { ShopMainComponent } from "./pages/shop-main/shop-main.component";
import { ViewProductComponent } from "./pages/view-product/view-product.component";

const routes: Routes = [
	{path: '', component: ShopMainComponent, children: [
		{path: '', redirectTo: 'all', pathMatch: 'full'},
		{path: 'all', component: AllProductsComponent},
		{path: 'espresso', component: EspressoComponent},
		{path: 'filter', component: FilterComponent},
		{path: 'merchandise', component: MerchandiseComponent}
	]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }