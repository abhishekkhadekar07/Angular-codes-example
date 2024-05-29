import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,DetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  regForm!:FormGroup;
  @Output() onClickFunctionInChild=new EventEmitter();
  passedDataFromChildToParent1!:string;
  passedDataFromChildToParent!:string;
  @Input() Fname!:string;
  @Input() title!:string;
  
  @Output() onClickSecondFunctionInChild=new EventEmitter();

 constructor(private fb:FormBuilder){

 }

handleFunctionInChildTwo(event:any){
  this.onClickSecondFunctionInChild.emit(event)
}
 //this we called in child
 parentFunction(data:any){
  console.log(data);
this.passedDataFromChildToParent1=data;


  
 }

 passDataFromChildToParent(data1:any){
  console.log("passDataFromChildToparent",data1);
  this.passedDataFromChildToParent=data1
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
