import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCategory } from '../_model/product-category';

@Injectable()
export class ProductCategoryService {
  productCategory:ProductCategory[]=[
    {
      createdAt: "2020-05-01T14:56:51.469Z",
    id: "5eac38b30cfca15d7c804090",
    name: "ArtsCrafts",
    updatedAt: "2020-05-01T14:56:51.469Z",
    __v: 0,
    _id: "5eac38b30cfca15d7c804090"
  },

    // {createdAt: "2020-05-01T14:58:31.152Z",
    // id: "5eac39170cfca15d7c804091",
    // name: "Automotive",
    // updatedAt: "2020-05-01T14:58:31.152Z",
    // __v: 0,
    // _id: "5eac39170cfca15d7c804091"}
    // {id:"5eac38b30cfca15d7c804090", name:"Arts & Crafts"},
    // {id:2, name:"Automotive"},
    // {id:3, name:"Baby"},
    // {id:4, name:"Books"},
    // {id:5, name:"Eletronics"},
    // {id:6, name:"Women's Fashion"},
    // {id:7, name:"Men's Fashion"},
    // {id:8, name:"Health & Household"},
    // {id:9, name:"Home & Kitchen"},
    // {id:10, name:"Military Accessories"},
    // {id:11, name:"Movies & Television"},
    // {id:12, name:"Tools & Home Improvement"},
    // {id:13, name:"Toys & Games"},
  ];

  constructor(private httpClient:HttpClient) { }

  baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';

  getAllCategories(){
    return this.httpClient.get(`${this.baseUrl}category`)
    // return this.productCategory.slice();
  }
}
