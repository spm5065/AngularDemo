import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product|undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Get product id from the url
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

  // Get the product with that id
  this.product = products.find(product => product.id === productIdFromRoute);
  }

}