import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';



import { App } from './app.component';
import { NavbarTopComponent } from './navbar/navbarTop.component';
import { NavbarLeftComponent } from './navbar/navbarLeft.component';
import { RoutePageComponent } from './routeView/route.component';

@NgModule({
  declarations: [
    App,
    NavbarTopComponent,
    NavbarLeftComponent,
    RoutePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvXw7f8fGtztwUHQRFthQAKc1-XyYS24A'
    })
  ],
  providers: [],
  bootstrap: [ App ]
})
export class AppModule {}