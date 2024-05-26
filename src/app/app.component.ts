import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApiResponceComponent } from './component/api-responce/api-responce.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductApiFetchComponent } from './component/product-api-fetch/product-api-fetch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,ApiResponceComponent,HttpClientModule,ProductApiFetchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud';
  FirstName='Abhishek';
}
