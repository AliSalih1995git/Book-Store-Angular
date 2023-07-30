import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/BooksScheema';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private service: ApiServiceService,
    private cartService: CartService
  ) {}
  AllBooksData: Books[] = [];

  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks() {
    this.service.getAllBooks().subscribe((res) => {
      this.AllBooksData = res.books;
    });
  }
  addToCart(book: Books) {
    console.log('Clicked');

    this.cartService.addToCart(book);
  }
}
