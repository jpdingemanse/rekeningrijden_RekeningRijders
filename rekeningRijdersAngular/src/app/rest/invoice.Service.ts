import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Invoice } from './../domain/invoice';

@Injectable()
export class InvoiceService {
<<<<<<< HEAD
    private url = "http://192.168.24.43:8080/S61D_Rekeneningrijden/api/Invoice/";
    private localurl = "http://localhost:19111/S61D_Rekeneningrijden/api/Invoice/"
=======
    private url = "http//192.168.24.43:8080/S61D_RekeningRijders/api/Invoice/";
    private localurl = "http://localhost:8080/S61D_Rekeneningrijden/api/Invoice/"
>>>>>>> 41e882864a011c95cabf26652dcb8b08009967dd

    constructor(private http : Http){}

    GetInvoices(id: Number): Promise<Invoice []> {
        return this.http.get(this.localurl + "GetInvoices/"+ id)
                        .toPromise()
                        .then(this.extractData);
    }

    SetInvoicePaid(id: any) : Promise<Invoice>{
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        return this.http.put(this.localurl + 'InvoicePaid', JSON.stringify(id), {headers: header})
                        .toPromise()
                        .then(this.extractData);
    }

    private extractData(res: Response) {
        return res.json();
    }
}