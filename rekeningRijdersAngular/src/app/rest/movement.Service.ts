import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movement } from './../domain/movement';

@Injectable()
export class MovementService {
    private url = "http//192.168.24.46/S61D_RekeningRijders/api/Movement/";
    private localurl = "http://localhost:8080/S61D_RekeningRijders/api/Movement/"

    constructor(private http : Http){}

    getAllMovements(): Promise<Movement []> {
        return this.http.get(this.localurl + "getAllMovements")
                        .toPromise()
                        .then(this.extractData);
    }

    private extractData(res: Response) {
        return res.json();
    }
}