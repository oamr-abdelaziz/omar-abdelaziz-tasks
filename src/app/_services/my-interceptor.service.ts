import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService {

  constructor() { }
  intercept(req:HttpRequest<any>, next:HttpHandler):Observable <HttpEvent<any>>{
    const token = localStorage.getItem('token');
    let requestClone;
    if(token){

       requestClone= req.clone({headers:req.headers.append('authorization',`${token}`)})
    }
    else{
      requestClone=req;
    }
    return next.handle(requestClone)
  }
}
