import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { LoginService } from 'app/global/login.Service';
//import { TranslateService } from './translate';
 
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  date: DateModel;
  options: DatePickerOptions;

  // public translatedText: string;
  // public supportedLanguages: any[];
 
  constructor(private loginService : LoginService, ){}//private _translate: TranslateService){}
  ngOnInit() {
      // // standing data
      // this.supportedLanguages = [
      //   { display: 'English', value: 'en' },
      //   { display: 'Nederlands', value: 'es' },
      //   { display: '华语', value: 'zh' },
      // ];
      
      // this.selectLang('es');
        
    }
  // isCurrentLang(lang: string) {
  //     return lang === this._translate.currentLang;
  //   }
    
  //   selectLang(lang: string) {
  //     // set default;
  //     this._translate.use(lang);
  //     this.refreshText();
  //   }
    
  //   refreshText() {
  //     this.translatedText = this._translate.instant('hello world');
  //   }

}
