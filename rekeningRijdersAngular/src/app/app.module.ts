import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { Routing } from './route/routing.component';

// import { App } from './app.component';
import { AppComponent } from './app.component'
import { NavbarTopComponent } from './navbar/navbarTop.component';
import { NavbarLeftComponent } from './navbar/navbarLeft.component';
import { RoutePageComponent } from './routeView/route.component';
import { HomePageComponent } from './body/home.component';
import { LoginComponent } from './login/login.component';
import { InvoicePageComponent } from './invoiceView/invoice.component'

import { BeaconService } from './rest/beacon.Service';
import { DriverService } from './rest/driver.Service';
import { InvoiceService } from './rest/invoice.Service';

import { LoginService } from './global/login.Service';
import { DatePickerModule } from 'ng2-datepicker';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarTopComponent,
    NavbarLeftComponent,
    RoutePageComponent,
    HomePageComponent,
    InvoicePageComponent
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
    BeaconService,
    DriverService,
    LoginService,
    InvoiceService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }