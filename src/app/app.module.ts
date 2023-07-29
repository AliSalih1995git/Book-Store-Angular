import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './service/api-service.service';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProductViewComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
