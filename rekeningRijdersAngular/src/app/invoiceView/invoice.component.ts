import {
    Component,
    NgModule,
    OnInit
} from '@angular/core';

import { Invoice } from "./../domain/invoice";
import { InvoiceRow } from "./../domain/invoiceRow";
import { InvoiceService } from "./../rest/invoice.Service"

@Component({
    selector: 'invoice-page',
    templateUrl: './invoice.html',
    styleUrls: ['./../app.component.css']

})

export class InvoicePageComponent implements OnInit {
    invoices: Invoice[];
    invoice: Invoice;
    invoiceRowss: InvoiceRow[];
    
    constructor(private invoiceService: InvoiceService) { }

    ngOnInit(): void {
        this.invoiceService.GetInvoices(1)
                            .then(value => this.invoices = value);
    }

    onClickOpenInvoice(value: Invoice){
        this.invoice = value;
        this.invoiceRowss = this.invoice.invoiceRows;
    }

    onClickInvoicePaid(value: Invoice) {
        this.invoiceService.SetInvoicePaid(value);
    }
}