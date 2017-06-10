import { Component } from '@angular/core'
import { LoginService } from 'app/global/login.Service'
import { DriverService } from 'app/rest/driver.Service';

@Component({
    selector: 'login-page',
    templateUrl: './login.html',
    styleUrls: ['./../app.component.css']
})
export class LoginComponent {

    loginErrorMessage: String;

    constructor(private loginService: LoginService, private driverService: DriverService) { }

    login(username: String, password: String) {
        if (username == "" || password == "") {
            this.loginErrorMessage = 'Incorrecte gebruikersnaam of wachtwoord!!'
        } else {
            this.driverService.getUserByUsernameAndPassword(username, password)
                .then(result => {
                    if (result != null) {
                        this.loginService.loginUser = result
                        this.loginService.loginPage = true
                        this.loginService.loginStatus = true
                    } else {
                        this.loginErrorMessage = 'Incorrecte gebruikernaam of wachtwoord!!';
                    }
                })
        }
    }
    register() {
        this.loginService.registerPage = true;
        this.loginService.loginPage = true;
        this.loginService.loginStatus = false;
    }
}