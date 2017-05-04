import { Component } from '@angular/core'
import { Driver } from 'app/domain/driver'
import { LoginService } from 'app/global/login.Service'

@Component({
    selector : 'profile-page',
    templateUrl : './profile.html',
    styleUrls: ['./../app.component.css']
})
export class ProfileComponent {

    profile : Driver;

    constructor(private loginService: LoginService){
        if(this.loginService.loginUser != null){
            this.profile = this.loginService.loginUser;
        }
    }
    
}