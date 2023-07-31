import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(private service: CartService) {}
  ngOnInit(): void {
    this.clearCart();
  }
  clearCart() {
    this.service.clearCart();
  }
}
