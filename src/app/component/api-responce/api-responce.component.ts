import { Component } from '@angular/core';
import { PostServiceService } from '../../post-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-api-responce',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './api-responce.component.html',
  styleUrl: './api-responce.component.scss'
})
export class ApiResponceComponent {
  posts:any;
  colors = ["Red", "Blue", "White"];
  constructor(private postService:PostServiceService){

  } 
  onFetchData(){
    this.postService.getPosts().subscribe((data)=>{
      console.log("data is fetched")
      this.posts=data;


    },
  (error)=>{
    console.log("error", error);
    
  })
  }
 
}
