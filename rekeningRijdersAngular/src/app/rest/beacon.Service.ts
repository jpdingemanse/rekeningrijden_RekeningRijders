import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Beacon } from './../domain/beacon';

@Injectable()
export class BeaconService {
    private url = "http//192.168.24.46/S61D_RekeningRijders/api/Beacon/";
    private localurl = "http://localhost:19111/S61D_Rekeneningrijden/api/Beacon/"

    constructor(private http : Http){}

    GetMovementsPerIcan(ican: String, date: string): Promise<Beacon []> {
        console.log(this.localurl + "GetMovementsPerIcan/"+ ican + "/" + date)
        return this.http.get(this.localurl + "GetMovementsPerIcan/"+ ican + "/" + date)
                        .toPromise()
                        .then(this.extractData);
    }

    private extractData(res: Response) {
        return res.json();
    }
}