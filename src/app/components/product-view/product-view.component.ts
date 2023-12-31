import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from 'src/app/BooksScheema';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  constructor(
    private service: ApiServiceService,
    private cartService: CartService,
    private router: ActivatedRoute
  ) {}

  singleProductData: any = null;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getSingleProduct(getParamId);
  }

  getSingleProduct(id: any) {
    this.service.getSingleProduct(id).subscribe((res) => {
      this.singleProductData = res;
      console.log(this.singleProductData);
    });
  }
  addToCart(book: Books) {
    console.log('Clicked');

    this.cartService.addToCart(book);
  }
}
