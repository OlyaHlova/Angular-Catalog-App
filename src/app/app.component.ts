import {Component, OnInit} from '@angular/core';
import {IProduct} from './models/product';
import {ProductsService} from "./services/products.service";
import {Observable, tap} from "rxjs";
// import {products as data} from './data/products';

@Component({
  selector: 'app-root', // the name for the template html tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {

// to make request during initialization of component, best practice
export class AppComponent implements OnInit{
  title = 'angular catalog app';

  // products: IProduct[] = [];IProduct
  // to use products field in template
  // products: IProduct[] = data;

  // products: IProduct[] = []; // commented to work with streams
  loading = false;
  // created stream products using $
  products$!: Observable<IProduct[]>

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
    // this.productsService.getAll().subscribe(products => {
    //   this.products = products;
    //   this.loading = false
    // })
  }
}
