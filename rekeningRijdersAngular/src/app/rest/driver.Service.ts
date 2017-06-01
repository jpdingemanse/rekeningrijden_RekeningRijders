import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Driver } from './../domain/driver';
import { Vehicle } from './../domain/vehicle';

@Injectable()
export class DriverService {
   
<<<<<<< HEAD
    private localurl = "http://localhost:19111/S61D_Rekeneningrijden/api/Driver/";
=======
    private urlVehicle = "http://localhost/S61D_Rekeneningrijden/api/Vehicle/";
    private localurl = "http://localhost:8080/S61D_Rekeneningrijden/api/Driver/";
>>>>>>> 41e882864a011c95cabf26652dcb8b08009967dd
    private url = "http://192.168.24.43:8080/S61D_Rekeneningrijden/api/Driver/";
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
<<<<<<< HEAD
        console.log(this.localurl + 'CheckLogin/' + username + '/' + password)
=======
>>>>>>> 41e882864a011c95cabf26652dcb8b08009967dd
         return this.http.get(this.localurl + 'CheckLogin/' + username +'/'+ password)
                        .toPromise()
                        .then(this.extractData);
    }

   
    private extractData(res: Response) {
        return res.json();
    }
}