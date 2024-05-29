import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApiResponceComponent } from './component/api-responce/api-responce.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductApiFetchComponent } from './component/product-api-fetch/product-api-fetch.component';
import { GeoLocationComponentComponent } from './component/geo-location-component/geo-location-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,ApiResponceComponent,HttpClientModule,ProductApiFetchComponent,GeoLocationComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  lat:any='no location'
  lng:any='no location'
  getLocation(event:any) {
    console.log("location fetched ")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lat);
        }
      },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
 
  getLocationConsole(event:any){
console.log(this.lat,this.lng);


  }
}
