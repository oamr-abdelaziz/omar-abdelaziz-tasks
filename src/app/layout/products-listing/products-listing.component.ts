import { Component, EventEmitter , OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit {
  // @Output() secondSent=new EventEmitter<Product>();
  pageNumbers:number[]=[];
  pageSize:number=9;
  currentPage:number=0;
  products:Product[]=[];

  constructor(private productService:ProductService) {
   }

   ngOnInit(): void {
     this.productService.getAllProducts().subscribe(
       (response)=>{
        //  console.log(response['product']);
         this.products=response['product'];
         this.SpecifyNumberOfPages(response['numberOfProducts']);
      },
      (err)=>{console.log(err);},
      ()=>{}
      );
    }
    
    SpecifyNumberOfPages(length){
      this.pageNumbers=[];
      for(let i =0; i<length/this.pageSize;i++){
        this.pageNumbers.push(i+1);
      }
    }
    getProductsInSpecPage(){
      const start=this.currentPage*this.pageSize;
      return this.products.slice(
        start,
      start+this.pageSize
    );
  }

  searchByInput(searchInput){
    // this.products= this.productService.searchProductsByName(searchInput.value);
    // this.getProductsInSpecPage();
    // this.SpecifyNumberOfPages();

  }
}
