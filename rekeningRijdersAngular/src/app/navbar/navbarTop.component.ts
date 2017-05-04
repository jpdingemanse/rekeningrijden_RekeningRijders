import { Component } from '@angular/core';
import { LoginService } from 'app/global/login.Service'

@Component({
    selector : 'navbar-Top',
    templateUrl: './navbarTop.html'
})

export class NavbarTopComponent {
    loginText : string = 'Login'

    constructor(private loginService : LoginService){
        if(this.loginService.loginStatus){
            this.loginText = 'Logout';
        }
    }

    navigateToLogin(){
        this.loginService.registerPage = false;
        this.loginService.loginPage = false;
        this.loginService.loginStatus = false;
    }
}