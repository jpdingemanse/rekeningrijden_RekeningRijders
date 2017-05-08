import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { LoginService } from 'app/global/login.Service'
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  date: DateModel;
  options: DatePickerOptions;
 
  constructor(private loginService : LoginService){}
}
