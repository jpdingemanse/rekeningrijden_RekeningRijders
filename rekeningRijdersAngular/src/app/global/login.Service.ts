import { Injectable } from '@angular/core'
import { Driver } from 'app/domain/driver';

@Injectable()
export class LoginService {
    public loginStatus : boolean = false;
    public loginPage : boolean = false;

    public loginUser : Driver;


}