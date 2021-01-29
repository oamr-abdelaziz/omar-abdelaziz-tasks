import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../_model/product";

@Injectable()
export class ProductService {
  private products: Product[] = [
    // {
    //   id: 1,
    //   data: [{ name: 'Cam', description: 'this is camera' }],
    //   imagesUrls: ["../../assets/img/placeholder.png"],
    //   price: 34,
    //   categories: { id: 1 },
    //   discount: 23,

    // },
    // {
    //   id: 2,
    //   data: [{ name: 'Android', description: 'this is Android' }],
    //   imagesUrls: ["../../assets/img/placeholder.png"],
    //   categories: { id: 2 },
    //   price: 20
    // },
    // {
    //   id: 3,
    //   data: [{ name: 'Tablet', description: 'this is Tablet' }],
    //   categories: { id: 3 },
    //   imagesUrls: ["../../assets/img/placeholder.png"],
    //   price: 34
    // },
    // {
    //   id: 4,
    //   data: [{ name: 'Iphone', description: 'this is Iphone' }],
    //   categories: { id: 4 },
    //   imagesUrls: ["../../assets/img/placeholder.png"],
    //   price: 70,
    //   discount: 25
    // },
    // {
    //   id: 5,
    //   data: [{ name: 'mobile', description: 'this is mobile' }],
    //   categories: { id: 5 },
    //   imagesUrls: ["../../assets/img/placeholder.png"],
    //   discount: 10,
    //   price: 60,
    // },
    // {
    //   id: 6,
    //   data: [{ name: 'device', description: 'this is device' }],
    //   categories: { id: 6 },
    //   imagesUrls: ["../../assets/img/placeholder.png"],
    //   price: 10
    // },
    // {
    //   id: 7,
    //   data: [{ name: 'laptop', description: 'this is laptop' }],
    //   categories: { id: 7 },
    //   imagesUrls: ["../../assets/img/placeholder.png"],
    //   price: 100
    // },
    // {
    //   id: 8,
    //   data: [{ name: 'photo Camera', description: 'this is photo Camera' }],
    //   categories: { id: 8 },
    //   imagesUrls: ["../../assets/img/placeholder.png"],
    //   price: 47,
    //   discount: 21
    // },
    // {
    //   id: 9,
    //   data: [{ name: 'photo', description: 'this is photo' }],
    //   categories: { id: 9 },
    //   imagesUrls: ["../../assets/img/placeholder.png"],
    //   price: 65
    // },
    // {
    //   id: 10,
    //   data: [{ name: 'mobile2', description: 'this is mobile2' }],
    //   imagesUrls: ["../../assets/img/placeholder.png"],
    //   categories: { id: 10 },
    //   price: 90,
    //   discount: 20,
    // },
    // {
    //   id: 11,
    //   data: [{ name: 'device2', description: 'this is device2' }],
    //   imagesUrls: ["../../assets/img/placeholder.png"],
    //   categories: { id: 11 },
    //   price: 10,
    // },
    // {
    //   id: 12,
    //   data: [{ name: 'laptop3', description: 'this is laptop3' }],
    //   categories: { id: 12 },
    //   imagesUrls: ["../../assets/img/placeholder.png"],
    //   price: 100
    // },
    // {
    //   id: 13,
    //   data: [{ name: 'Digital Camera', description: 'this is Digital Camera' }],
    //   imagesUrls: ["../../assets/img/placeholder.png"],
    //   categories: { id: 13 },
    //   price: 47,
    //   discount: 21
    // }
  ];
  productAdded = new EventEmitter<Product>();

  baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';

  
  constructor(private httpClient: HttpClient) { }
  getAllProducts() {
    // console.log(this.baseUrl);

    // return this.products.slice();
    
    return this.httpClient.get(`${this.baseUrl}product`)

  }

  getProductById(id: number) {
    return this.httpClient.get(`${this.baseUrl}product/${id}`)
  }

  addProduct(product: Product) {
    let body = {
      discount:product.discount,
      price:product.price,
      data:product.data,
      imagesUrls:product.imagesUrls,
      categoryId:product.categories.id
    }
    // const token=localStorage.getItem('token')
    // const headers=new HttpHeaders({
    //   authorization:token
    // });
    return this.httpClient.post(`${this.baseUrl}product/add`,body)
    // const{data, price, discount, imagesUrls,paymentTypes,categories,tags}=product;
    // const id:number=this.products.length;
    // const newProduct:Product={id,data, price, discount, imagesUrls,paymentTypes,categories,tags};
    // this.products.push(newProduct);

    // console.log(this.products);

  }
  updateProduct(product: Product) {
    const Index = this.products.findIndex((p) => p.id === product.id);
    const { data, price, discount, imagesUrls, paymentTypes, categories, tags } = product;

    this.products[Index] = { id: product.id, data, price, discount, imagesUrls, paymentTypes, categories, tags };
  }

  deleteProduct(id) {
    const Index = this.products.findIndex((p) => p.id === id);
    this.products.slice(Index, 1);
  }

  searchProductsByName(Input) {
    return this.products.filter(p => p.data[0].name.toLowerCase().includes(Input.toLowerCase()));
  }
}