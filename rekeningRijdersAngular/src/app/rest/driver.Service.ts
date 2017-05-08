import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Driver } from './../domain/driver';
import { Vehicle } from './../domain/vehicle';

@Injectable()
export class DriverService {
    //private url = "http://192.168.24.46:8080/S61D_RekeningRijders/api/Driver/";
    private urlVehicle = "http://localhost/S61D_Rekeneningrijden/api/Vehicle/";
    private localurl = "http://localhost:19111/S61D_Rekeneningrijden/api/Driver/";
    private url = "http://192.168.24.46:8080/S61D_Rekeneningrijden/api/Driver/";
    constructor(private http : Http){}

    getDriverById(id : any) : Promise<Driver> {
        return this.http.get(this.localurl + 'GetDriver/' + id)
                        .toPromise()
                        .then(this.extractData);
    }
    getVehiclesDriver(id : any) : Promise<Vehicle[]> {
        return this.http.get(this.localurl+ 'GetAllVehicle/'+ id)
                                .toPromise()
                                .then(this.extractData)
    }
    getDriverByFullName(name : string, lastname : string) : Promise<Driver []>{
        return this.http.get(this.localurl + "GetDriverByName/" + name + '/'+ lastname)
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
   
   

   
    getUserByUsernameAndPassword(username: String, password: String){
         return this.http.get(this.localurl + 'CheckLogin/' + username +'/'+ password)
         //return this.http.get("http://localhost:19111/S61D_Rekeneningrijden/api/Driver/CheckLogin/lino1/p@33word")
                        .toPromise()
                        .then(this.extractData);
    }

   
    private extractData(res: Response) {
        return res.json();
    }
}