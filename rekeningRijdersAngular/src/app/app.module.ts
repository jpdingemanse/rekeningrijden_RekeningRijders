import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { Routing } from './route/routing.component';

import { App } from './app.component';
import { NavbarTopComponent } from './navbar/navbarTop.component';
import { NavbarLeftComponent } from './navbar/navbarLeft.component';
import { RoutePageComponent } from './routeView/route.component';


import { BeaconService } from './rest/beacon.Service';

import { DatePickerModule } from 'ng2-datepicker';
 
 
@NgModule({
  
  declarations: [
    App,
    NavbarTopComponent,
    NavbarLeftComponent,
    RoutePageComponent
  ],
  imports: [
    DatePickerModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvXw7f8fGtztwUHQRFthQAKc1-XyYS24A'
    })
  ],
  providers: [
    BeaconService
  ],
  bootstrap: [ App ]
})
export class AppModule {}