import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StringCutPipe } from "../pipes/string-cut.pipe";
import { AuthGuardService } from "../_services/auth-guard.service";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductsListingComponent } from "./products-listing/products-listing.component";

@NgModule({
    declarations: [
        ProductsListingComponent,
        ProductItemComponent,
        AddProductComponent,
        ProductDetailsComponent,
        StringCutPipe,
    ],

    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path:'', children:[
                {path: '' ,component: ProductsListingComponent},
                { path: 'details/:id', component: ProductDetailsComponent },
                { path: 'add', component: AddProductComponent,canActivate:[AuthGuardService] },
                { path: 'edit/:id', component: AddProductComponent,canActivate:[AuthGuardService]  }
            ]},
        ])
    ],
    exports: [],
    providers: []
})

export class ProductModule { }
