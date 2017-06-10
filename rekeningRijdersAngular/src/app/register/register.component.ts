import { Component } from '@angular/core'
import { Driver } from 'app/domain/driver'
import { LoginService } from 'app/global/login.Service'
import { DriverService } from 'app/rest/driver.Service';
import { Router } from '@angular/router';

@Component({
    selector: 'register-page',
    templateUrl: './register.html',
    styleUrls: ['./../app.component.css']
})
export class RegisterComponent {

    registerErrorMessage: String
    driver: Driver;

    constructor(private loginService: LoginService, private driverService: DriverService, private router: Router) {

    }

    createNewProfile(name: string, lastname: string, username: string, password: string, conformation: string, phonenumber: string, postal: string, housenumber: string, city: string) {
        if (username != "") {
            if (password == conformation && password != "" && conformation != "") {
                this.driverService.createNewDriver(new Driver(0, name, lastname, postal, city, "", username, password, housenumber, phonenumber))
                    .then(value => {
                        if (value != null) {
                            this.loginService.registerPage = false;
                            this.loginService.loginPage = false;
                            this.loginService.loginStatus = false;
                        } else {
                            this.registerErrorMessage = "Er is iets mis gegaan bij aanmaken van een nieuwe profiel";
                        }
                    })
            } else {
                this.registerErrorMessage = "De ingevulde wachtwoord is niet hetzelfde";
            }

        }
        else {
            this.registerErrorMessage = "Er is geen gebruikernaam opgegeven";
        }

    }

    onclickCancel() {
        this.loginService.registerPage = false;
        this.loginService.loginPage = false;
        this.loginService.loginStatus = false;
    }

}