import { Component } from '@angular/core';
import { PostServiceService } from '../../post-service.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-product-api-fetch',
  standalone: true,
  imports: [],
  templateUrl: './product-api-fetch.component.html',
  styleUrl: './product-api-fetch.component.scss'
})
export class ProductApiFetchComponent {
products:any;


constructor(private productservice:PostServiceService){

}
ngOnInit(){

}
onClickFetchProducts(){
  this.productservice.getProducts().subscribe((response)=>{
    if(response){
      console.log('responce',response)
      this.products=response;
      console.log(this.products.products);
      
    }
  },
(error)=>{
  console.warn('error',error)
})
}
}
