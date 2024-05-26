import { Component } from '@angular/core';
import { PostServiceService } from '../../post-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


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
      console.log("data is fetched",data)
      this.posts=data;
      const filteredData=this.posts.filter((post:any)=>post.userId===1 && post.title.includes('sunt'))
      console.log("fileteredData",filteredData)
    },
  (error)=>{
    console.log("error", error);
    
  })

  }

 
}
