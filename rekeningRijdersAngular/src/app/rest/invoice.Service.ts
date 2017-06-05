import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Invoice } from './../domain/invoice';

@Injectable()
export class InvoiceService {

    private url = "http://192.168.24.43:8080/S61D_Rekeneningrijden/api/Invoice/";
    private localurl = "http://localhost:19111/S61D_Rekeneningrijden/api/Invoice/"



    constructor(private http : Http){}

    GetInvoices(id: Number): Promise<Invoice []> {
        return this.http.get(this.url + "GetInvoices/"+ id)
                        .toPromise()
                        .then(this.extractData);
    }
    getInvoicesByDriver(name : any) : Promise<Invoice []> {
        return this.http.get(this.url + 'GetInvoices/' + name)
                        .toPromise()
                        .then(this.extractData);
    }
    SetInvoicePaid(id: any) : Promise<Invoice>{
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        return this.http.put(this.url + 'InvoicePaid', JSON.stringify(id), {headers: header})
                        .toPromise()
                        .then(this.extractData);
    }

    private extractData(res: Response) {
        return res.json();
    }
}