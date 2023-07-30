import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/BooksScheema';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: { book: Books; quantity: number }[] = [];
  totalQuantity = 0;
  totalPrice = 0;

  constructor(private service: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.service.getCartItems();
    this.updateCart();
  }

  updateCart(): void {
    this.totalQuantity = this.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    this.totalPrice = this.cartItems.reduce((total, item) => {
      const price =
        typeof item.book.price === 'number'
          ? item.book.price
          : parseFloat(item.book.price.replace(/[^0-9.-]+/g, ''));
      return total + price * item.quantity;
    }, 0);
    this.totalPrice = parseFloat(this.totalPrice.toFixed(2));
  }

  incrementQuantity(item: { book: Books; quantity: number }): void {
    item.quantity++;
    this.updateCart();
  }

  decrementQuantity(item: { book: Books; quantity: number }): void {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeItemFromCart(item);
    }
    this.updateCart();
  }

  removeItemFromCart(item: { book: Books; quantity: number }): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      const confirmation = window.confirm(
        'Are you sure you want to remove this item from the cart?'
      );
      if (confirmation) {
        this.cartItems.splice(index, 1);
        this.updateCart();
        this.service.saveCartItemsToLocalStorage();
        this.service.loadCartItems();
      }
    }
  }

  checkout(): void {
    console.log('Checkout clicked');
  }

  clearCart() {
    this.service.clearCart();
    this.cartItems = [];
    this.updateCart();
  }
}
