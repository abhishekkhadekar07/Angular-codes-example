import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-geo-location-component',
  standalone: true,
  imports: [],
  templateUrl: './geo-location-component.component.html',
  styleUrl: './geo-location-component.component.scss'
})
export class GeoLocationComponentComponent {
  
  @Output() onClickGetLocationFunction =new EventEmitter();
  @Output() onClickGetLocationConsole=new EventEmitter();
 @Input() lat:any;
 @Input() lng:any;

  handleGetLocationClick(event:any){
    this.onClickGetLocationFunction.emit(event)
  }
   
  handleGetlocationConsole(event:any){
    this.onClickGetLocationConsole=new EventEmitter();
  }
}
