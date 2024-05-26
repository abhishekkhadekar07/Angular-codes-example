import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApiResponceComponent } from './component/api-responce/api-responce.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent }
    ,
    {path:'api',component:ApiResponceComponent}
];
