import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  posts:any=[];
  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  
  }

  getProducts(){
    return this.http.get('https://dummyjson.com/products');
  }
}
