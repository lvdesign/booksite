import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  loading = false;

  constructor(
    private productsService: ProductsService
    ) { }

  ngOnInit() {

    this.loading = true;

    this.productsService.getAllProducts()
      .subscribe(products => {
        this.loading = false;
        this.products = products;
      });
  }

}
