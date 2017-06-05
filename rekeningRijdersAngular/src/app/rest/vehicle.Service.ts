import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { Vehicle } from './../domain/vehicle';
import { Request } from 'app/domain/request';

@Injectable()
export class VehicleService {
    private url = "http://192.168.24.43:8080/S61D_Rekeneningrijden/api/Vehicle/";
    private localurl = "http://localhost:19111/S61D_Rekeneningrijden/api/Vehicle/";

    constructor(private http: Http) { }

    getVehicleById(id: any): Promise<Vehicle[]> {
        return this.http.get(this.localurl + "GetAllVehicle/" + id)
            .toPromise()
            .then(this.extractData);
    }

    newRequest(value : Request): Promise<boolean>{
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        return this.http.post(this.localurl + "NewRequest/", JSON.stringify(value), {headers: header})
                    .toPromise()
                    .then(this.extractData);
    }
    
    getAllRequest(id : number): Promise<Request[]>{
        return this.http.get(this.localurl + "GetAllRequest/" + id)
            .toPromise()
            .then(this.extractData);
    }
    private extractData(res: Response) {
        return res.json();
    }
}