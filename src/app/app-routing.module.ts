import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productItem/:id', component: ProductViewComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
