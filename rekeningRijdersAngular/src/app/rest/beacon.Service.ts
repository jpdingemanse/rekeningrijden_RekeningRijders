import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Beacon } from './../domain/beacon';

@Injectable()
export class BeaconService {
    private url = "http://192.168.24.43:8080/S61D_Rekeneningrijden/api/Beacon/";
    private localurl = "http://localhost:8080/S61D_Rekeneningrijden/api/Beacon/"
    //http//192.168.24.43:8080/S61D_RekeningRijders/api/Beacon/GetMovementsPerIcan/12-test-2/2017-05-12

    constructor(private http : Http){}

    GetMovementsPerIcan(ican: String, date: string): Promise<Beacon []> {
       
        return this.http.get(this.localurl + "GetMovementsPerIcan/"+ ican + "/" + date)
<<<<<<< HEAD
                        .toPromise()
                        .then(this.extractData);
    }

    GetMovementsPerPeriod(ican: String, datevan: string, datetot: string): Promise<Beacon []> {
       console.log(this.localurl+"GetMovementsPerPeriod/" + ican+ "/" + datevan + "/" + datetot)
        return this.http.get(this.localurl + "GetMovementsPerPeriod/"+ ican + "/" + datevan + "/" + datetot)
=======
>>>>>>> 41e882864a011c95cabf26652dcb8b08009967dd
                        .toPromise()
                        .then(this.extractData);
    }

    private extractData(res: Response) {
        return res.json();
    }
}