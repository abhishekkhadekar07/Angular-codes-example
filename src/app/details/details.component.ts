import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
 
  @Input() firstName!:string;
  @Input() lastName!:string;
  @Input() description!:string;
  @Input()  skills!:string;

  @Output() parentFunction:EventEmitter<any>=new EventEmitter();
  @Output() passDataFromChildToParent:EventEmitter<any>=new EventEmitter();

  constructor(){



  }
ngOnInit(){
   this.parentFunction.emit("lo")
   this.passDataFromChildToParent.emit("this.firstName")
}
 }
