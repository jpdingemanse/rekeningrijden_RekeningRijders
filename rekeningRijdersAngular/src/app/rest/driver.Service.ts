import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Driver } from './../domain/driver';

@Injectable()
export class DriverService {
    private url = "http://192.168.24.46:8080/S61D_RekeningAdministratie/api/Driver/";
    private localurl = "http://localhost:18410/S61D_RekeningAdministratie/api/Driver/"

    constructor(private http : Http){}
    getUserByUsernameAndPassword(username: String, password: String){
         return this.http.get(this.localurl + 'GetUserByUsernameAndPassword/' + username +'/'+ password)
                        .toPromise()
                        .then(this.extractData);
    }

    createNewDriver(driver : Driver) : Promise<Driver> {
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        return this.http.post(this.localurl + 'createNewDriver/', JSON.stringify(driver), {headers: header})
                        .toPromise()
                        .then(this.extractData);
    }
    private extractData(res: Response) {
        return res.json();
    }
}