import { Injectable } from '@angular/core';
import { Books } from '../BooksScheema';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {
    this.loadCartItems();
  }
  cartItems: { book: Books; quantity: number }[] = [];
  cartItemsChanged = new Subject<void>();

  saveCartItemsToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  loadCartItems() {
    const cartItemsString = localStorage.getItem('cartItems');
    if (cartItemsString) {
      this.cartItems = JSON.parse(cartItemsString);
    }
    this.cartItemsChanged.next();
    return this.cartItems;
  }
  addToCart(book: Books) {
    const existingCartItem = this.cartItems.find(
      (item) => item.book.isbn13 === book.isbn13
    );

    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      this.cartItems.push({ book, quantity: 1 });
    }
    this.saveCartItemsToLocalStorage();
    this.cartItemsChanged.next();
  }
  getCartItems(): { book: Books; quantity: number }[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.saveCartItemsToLocalStorage();
    this.cartItemsChanged.next();
  }
}
