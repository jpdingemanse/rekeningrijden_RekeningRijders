import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { InvoiceRow } from './../domain/invoicerow';
import { Vehicle } from './../domain/vehicle';

@Injectable()
export class InvoiceRowService {
    private url = "http://192.168.24.43:8080/S61D_Rekeneningrijden/api/InvoiceRow/"
    // private url = "http://localhost:18410/S61D_Rekeneningrijden/api/InvoiceRow/"

    constructor(private http: Http) { }

    getInvoiceRowByInvoice(id: any): Promise<InvoiceRow[]> {
        return this.http.get(this.url + 'GetInvoiceRows/' + id)
            .toPromise()
            .then(this.extractData);
    }
    

    private extractData(res: Response) {
        return res.json();
    }
}