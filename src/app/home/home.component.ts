import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  
})
export class HomeComponent {
  regForm!:FormGroup;
  
 constructor(private fb:FormBuilder){

 } 

isshow:boolean=true;
ngOnInit(){
  this.initRegForm();
}
//one of the   approach to fill use reactive forms  
//in order to avoid this new keyword we use different appraoah
initRegForm(){ 
  // this.regForm=new FormGroup({
  //   firstName:new FormControl(''),
  //   lastName:new FormControl(''),
  //   description:new FormControl(''),
  //   skills:new FormControl('')
  // })
//second approach
  this.regForm=this.fb.group({
    firstName:['',[Validators.required,Validators.maxLength(10),Validators.minLength(1)]],
      lastName:['',[Validators.required,Validators.maxLength(10),Validators.minLength(1)]],
      description:['',[Validators.required,Validators.maxLength(10),Validators.minLength(1),]],
      
      skills:['',[Validators.required,Validators.maxLength(10),Validators.minLength(1)]]
  })

}
register(form:FormGroup) {
    console.log(form.value);   
  }

}
