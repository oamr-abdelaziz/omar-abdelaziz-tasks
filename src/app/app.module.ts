import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { HeaderComponent } from './layout/header/header.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import {ProductService} from './_services/product.services';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PaymentTypeService } from './_services/payment-type.service';
import { ProductCategoryService } from './_services/product-category.service';
import { SharedModule } from './shared/dropdown/shared-module';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './layout/product.module';
import { MyInterceptorService } from './_services/my-interceptor.service';
// import { TestMeComponent } from './layout/test-me/test-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    // TestMeComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    
    HttpClientModule

  ],
  providers: [ProductService,PaymentTypeService,ProductCategoryService,{provide:HTTP_INTERCEPTORS,useClass:MyInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
