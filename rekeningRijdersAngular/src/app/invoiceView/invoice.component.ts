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
                            (window as any).paypal.Button.render({
        env: 'sandbox', // sandbox | production

            // PayPal Client IDs - replace with your own
            // Create a PayPal app: https://developer.paypal.com/developer/applications/create
            client: {
                sandbox:    'AcEbfF3qHu5ozrge4EiwvbWm8LeMKUmY8NX1KPTJlSEAeoc32XoW_Jn4vhi3LTL2XHmjFjLTHq4t1L0i',
                production: '<insert production client id>'
            },

            // Show the buyer a 'Pay Now' button in the checkout flow
            commit: true,

            // payment() is called when the button is clicked
            payment: function(data, actions) {

                // Make a call to the REST api to create the payment
                return actions.payment.create({
                    transactions: [
                        {
                            amount: { total: '0.01', currency: 'EUR' }
                        }
                    ]
                });
            },

            // onAuthorize() is called when the buyer approves the payment
            onAuthorize: function(data, actions) {

                // Make a call to the REST api to execute the payment
                return actions.payment.execute().then(function() {
                    window.alert('Payment Complete!');
                });
            }
    
      }, '#paypal-button');
    }

    onClickOpenInvoice(value: Invoice){
        this.invoice = value;
        this.invoiceRowss = this.invoice.invoiceRows;
    }

    onClickInvoicePaid(value: Invoice) {
        this.invoiceService.SetInvoicePaid(value);
    }
}