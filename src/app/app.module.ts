import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './componentes/pages.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DestinosComponent } from './componentes/destinos/destinos.component';
import { AlojamientosComponent } from './componentes/alojamientos/alojamientos.component';
import { RestaurantsComponent } from './componentes/restaurants/restaurants.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { LoginComponent } from './componentes/login/login.component';



const appRoutes : Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path:"contactenos",
        component: ContactenosComponent
      },
      {
        path:"destinos",
        component: DestinosComponent
      },
      {
        path:"alojamientos",
        component: AlojamientosComponent
      },
      {
        path:"restaurantes",
        component: RestaurantsComponent
      },
      {
        path:"home",
        component: HomeComponent
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DestinosComponent,
    AlojamientosComponent,
    RestaurantsComponent,
    ContactenosComponent,
    LoginComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
