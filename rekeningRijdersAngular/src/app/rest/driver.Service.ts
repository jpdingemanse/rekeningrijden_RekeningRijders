import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Driver } from './../domain/driver';
import { Vehicle } from './../domain/vehicle';

@Injectable()
export class DriverService {
    error: String;
    private url = "http://192.168.24.43:8080/S61D_Rekeneningrijden/api/Driver/";
    // private url = "http://localhost:18410/S61D_Rekeneningrijden/api/Driver/";

    constructor(private http: Http) { }

    getDriverById(id: any): Promise<Driver> {
        return this.http.get(this.url + 'GetDriver/' + id)
            .toPromise()
            .then(this.extractData);
    }
    getVehiclesDriver(id: any): Promise<Vehicle[]> {
        return this.http.get(this.url + 'GetAllVehicle/' + id)
            .toPromise()
            .then(this.extractData)
    }
    getDriverByFullName(name: string, lastname: string): Promise<Driver[]> {
        return this.http.get(this.url + "GetDriverByName/" + name + '/' + lastname)
            .toPromise()
            .then(this.extractData);
    }

    createNewDriver(driver: Driver): Promise<Driver> {
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        return this.http.post(this.url + 'CreateDriver/', JSON.stringify(driver), { headers: header })
            .toPromise()
            .then(this.extractData);
    }
    getUserByUsernameAndPassword(username: String, password: String) {
        return this.http.get(this.url + 'CheckLogin/' + username + '/' + password)
            .toPromise()
            .then(this.extractData)
            .catch(error => { error = "Kan geen verbinding maken met de database" });
    }


    private extractData(res: Response) {
        return res.json();
    }
}