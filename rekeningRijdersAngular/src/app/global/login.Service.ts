import { Injectable } from '@angular/core'
import { Driver } from 'app/domain/driver';

@Injectable()
export class LoginService {
    public loginStatus : boolean = true;
    public loginPage : boolean = true;

    public loginUser : Driver;


}