import { PaymentType } from "./payment-type";
import { ProductCategory } from "./product-category";
import { productLang } from "./product-lang";
import { Tag } from "./tag";

export interface Product{
    _id?:string;
    id?:number;
    name?:string;
    data?:productLang[];
    price?:number;
    discount?:number;
    paymentTypes?:PaymentType[];
    categories?:ProductCategory;
    tags?:Tag[];
    imagesUrls?:string[];
}