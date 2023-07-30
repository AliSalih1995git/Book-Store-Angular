import { Component, OnInit } from '@angular/core';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'book-store';
  cartItemsCount = 0;
  constructor(private service: CartService) {}

  ngOnInit() {
    this.cartItemsCount = this.service.loadCartItems().length;
    this.service.cartItemsChanged.subscribe(() => {
      this.cartItemsCount = this.service.loadCartItems().length;
    });
  }
}
