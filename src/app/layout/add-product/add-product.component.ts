import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentType } from 'src/app/_model/payment-type';
import { Product } from 'src/app/_model/product';
import { ProductCategory } from 'src/app/_model/product-category';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { ProductCategoryService } from 'src/app/_services/product-category.service';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product:Product={data:[{}],paymentTypes:[],tags:[],categories:{}};
  paymentTypes:PaymentType[]=[];
  productCategory:ProductCategory[]=[];
  editMode:Boolean=false;
  constructor(
    private activatedRoute:ActivatedRoute,
    private paymentTypeServices:PaymentTypeService,
    private productCategoryServices:ProductCategoryService,
    private productService:ProductService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.editMode=this.activatedRoute.snapshot.url[1] && this.activatedRoute.snapshot.url[1].path==='edit' &&true ;
    if(this.editMode){
      const id=this.activatedRoute.snapshot.params.id;
      this.productService.getProductById(id).subscribe(
        (res)=>{this.product=res['product']},
        (err)=>{console.log(err);
        },
        ()=>{}
      );
    }
    this.paymentTypes=this.paymentTypeServices.getAllPayments();
    // console.log("hey");
    // this.productCategory=this.productCategoryServices.getAllCategories();
    this.productCategoryServices.getAllCategories().subscribe(
      (res)=>{
        for(let i=0; i<res['length'];i++){
          this.productCategory.push(res[i]);
        }
        // console.log(this.productCategory);
        
        // this.productCategory=res;  why this doesn't work????????????????????????
      },
      (err)=>{console.log(err);
      },
      ()=>{}
    );

  }

  onAddingTag(tag){
    console.log('here');
    this.product.tags.push({name:tag.value});
    tag.value="";
  }

  onSubmit(form){
    
    for(let i=0;i<this.paymentTypes.length;i++){
      if(form.value['check_'+i]){
        this.product.paymentTypes.push(this.paymentTypes[i]);
      }
    }
    this.productService.addProduct(this.product).subscribe(
      (response)=>{
        
        this.router.navigate(['product'])
      },
      (err)=>{console.log(err);
      },
      ()=>{}
    )
    // console.log(this.product);
    
  }

  // cancel(btnClicked){
  //   if(btnClicked){

  //     this.router.navigate(['product']);
  //   }
  // }
}
