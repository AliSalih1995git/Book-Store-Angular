import { Component, OnInit } from '@angular/core';
import { CartService } from './service/cart.service';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'book-store';
  cartItemsCount = 0;
  isLoggedIn: boolean = false;
  constructor(
    private service: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartItemsCount = this.service.loadCartItems().length;
    this.service.cartItemsChanged.subscribe(() => {
      this.cartItemsCount = this.service.loadCartItems().length;
    });
    this.isLoggedIn = this.authService.IsLoggedIn();
  }

  logout() {
    // this.router.navigateByUrl('/');
    return localStorage.removeItem('userToken');
  }
}
