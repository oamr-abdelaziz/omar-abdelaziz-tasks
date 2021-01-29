import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:Product;
  relatedProducts:Product[]=[];
  constructor(
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id;
    // this.relatedProducts=this.productService.getAllProducts().slice(2,6);
    this.activatedRoute.params.subscribe(
      (params)=>{
        id=params.id;
        this.productService.getProductById(id).subscribe(
          (res)=>{
            this.product=res;
            this.productService.getAllProducts().subscribe(
              (respond)=>{this.relatedProducts=respond['product'].slice(4,8)},
              (err)=>{console.log(err);
              },
              ()=>{}
            )
          },
          (err)=>{console.log(err);
          },
          ()=>{}
        );
      },
      (error)=>{
        console.log(error);
        
      }
      // this.activatedRoute.snapshot.params.id;
    )
  }

  sendProductToListing():void{
    // this.firstSent.emit(this.product)
    this.productService.productAdded.emit(this.product)
  }

}
