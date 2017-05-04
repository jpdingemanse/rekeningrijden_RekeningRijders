import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Invoice } from './../domain/invoice';

@Injectable()
export class BeaconService {
    private url = "http//192.168.24.46/S61D_RekeningRijders/api/Invoice/";
    private localurl = "http://localhost/S61D_Rekeneningrijden/api/Invoice/"

    constructor(private http : Http){}

    GetInvoices(id: Number): Promise<Invoice []> {
        return this.http.get(this.localurl + "GetInvoices/"+ id)
                        .toPromise()
                        .then(this.extractData);
    }

    private extractData(res: Response) {
        return res.json();
    }
}