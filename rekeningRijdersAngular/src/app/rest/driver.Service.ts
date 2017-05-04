import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Driver } from './../domain/driver';

@Injectable()
export class DriverService {
    private url = "http://192.168.24.46:8080/S61D_Rekeneningrijden/api/Driver/";
    private localurl = "http://localhost:9806/S61D_Rekeneningrijden/api/Driver/"

    constructor(private http : Http){}
    getUserByUsernameAndPassword(username: String, password: String){
         return this.http.get(this.localurl + 'CheckLogin/' + username +'/'+ password)
                        .toPromise()
                        .then(this.extractData);
    }

    createNewDriver(driver : Driver) : Promise<Driver> {
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        return this.http.post(this.localurl + 'CreateDriver/', JSON.stringify(driver), {headers: header})
                        .toPromise()
                        .then(this.extractData);
    }
    private extractData(res: Response) {
        return res.json();
    }
}