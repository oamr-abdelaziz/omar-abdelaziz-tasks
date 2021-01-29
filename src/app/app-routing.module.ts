import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home' ,pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'product', loadChildren:'./layout/product.module#ProductModule'},
  {path:'register', component:RegisterComponent},
  // {path:'**', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules,scrollPositionRestoration:'top',useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
