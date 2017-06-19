import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Beacon } from './../domain/beacon';

@Injectable()
export class BeaconService {
    private url = "http://192.168.24.43:8080/S61D_Rekeneningrijden/api/Beacon/";
    // private url = "http://localhost:18410/S61D_Rekeneningrijden/api/Beacon/"
    //http//192.168.24.43:8080/S61D_RekeningRijders/api/Beacon/GetMovementsPerIcan/12-test-2/2017-05-12

    constructor(private http : Http){}

    GetMovementsPerIcan(ican: String, date: string): Promise<Beacon []> {
           ican = this.replaceLineSpace(ican)
        return this.http.get(this.url + "GetMovementsPerIcan/"+ ican + "/" + date)
            
                        .toPromise()
                        .then(this.extractData);
    }

    GetMovementsPerPeriod(ican: String, datevan: string, datetot: string): Promise<string> {
        return this.http.get(this.url + "GetMovementsPerPeriod/"+ ican + "/" + datevan + "/" + datetot)
                        .toPromise()
                        .then(this.extractData);
    }

    private extractData(res: Response) {
        return res.json();
    }

    replaceLineSpace(s:String){
        s = s.replace(' ', '|');
        s=  s.replace(' ', '|');
        s= s.replace(' ', '|');
        s = s.replace(' ', '|');
        return s && s.replace(' ', '|');
        
    }
}