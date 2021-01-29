import { Component } from '@angular/core';
import { Product } from './_model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app2';
  productsArray:Product[] = [];
  
  addToProductsArray(product:Product){
    this.productsArray.push(product);
  }

}
