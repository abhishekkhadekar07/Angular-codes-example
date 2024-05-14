import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
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
    firstName:[''],
      lastName:[''],
      description:[''],
      skills:['']
  })

}



register(form:FormGroup) {
    console.log(form.value);   
  }

}
