import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit,OnChanges {
  @Input() cartArray:Product[];
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.productService.productAdded.subscribe(
      (res)=>{this.cartArray.push(res)},
      (error)=>{console.error(error)},
      (completed)=>{}
    )
  }

  ngOnChanges(changes):void{
  }
  calculateTotalAmount():number{
    let total=0;
    for(let i =0;i<this.cartArray.length;i++){
      const prod=this.cartArray[i];
      total+=prod.discount?prod.price-prod.discount:prod.price;
    }
    return total;
  }
}