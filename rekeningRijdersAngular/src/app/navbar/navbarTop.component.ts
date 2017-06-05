import { Component } from '@angular/core';
import { LoginService } from 'app/global/login.Service'
import { TranslateService } from './../translate';

@Component({
    selector : 'navbar-Top',
    templateUrl: './navbarTop.html'
})

export class NavbarTopComponent {
    public translatedText: string;
  public supportedLanguages: any[];
    loginText : string = 'Login'

    constructor(private loginService : LoginService, private _translate: TranslateService){
        if(this.loginService.loginStatus){
            this.loginText = 'Uitloggen';
        }
    }
    navigateToLogin(){
        this.loginService.registerPage = false;
        this.loginService.loginPage = false;
        this.loginService.loginStatus = false;
    }
    ngOnInit() {
      // standing data
      this.supportedLanguages = [
        { display: 'English', value: 'en' },
        { display: 'Nederlands', value: 'es' },
        { display: 'Thais', value: 'zh' },
      ];
      
      this.selectLang('es');
        
    }
  isCurrentLang(lang: string) {
      return lang === this._translate.currentLang;
    }
    
    selectLang(lang: string) {
      // set default;
      this._translate.use(lang);
      this.refreshText();
    }
    
    refreshText() {
      this.translatedText = this._translate.instant('hello world');
    }
}
      

    
