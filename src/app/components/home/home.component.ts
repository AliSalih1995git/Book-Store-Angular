import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/BooksScheema';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: ApiServiceService) {}
  AllBooksData: Books[] = [];

  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks() {
    this.service.getAllBooks().subscribe((res) => {
      this.AllBooksData = res.books;
    });
  }
}
