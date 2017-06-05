import { Component,NgModule,OnInit } from '@angular/core';

import { Invoice } from "./../domain/invoice";
import { InvoiceRow } from "./../domain/invoiceRow";
import { InvoiceService } from "./../rest/invoice.Service"
import { InvoiceRowService } from "./../rest/invoiceRow.Service"
import { LoginService } from 'app/global/login.Service'
import { Driver } from 'app/domain/driver'

@Component({
    selector: 'invoice-page',
    templateUrl: './invoice.html',
    styleUrls: ['./../app.component.css']

})

export class InvoicePageComponent implements OnInit {
        

    invoiceList : Invoice[] = [];
    invoiceRowList : InvoiceRow[] = [];
    invoice : Invoice;
    profile: Driver;

    price : string;
    totalPrice : number = 0;

    paypalButtonStatus : boolean = false;

    constructor(private loginService: LoginService, private invoiceService : InvoiceService, private invoiceRowService : InvoiceRowService){
        if (this.loginService.loginUser != null) {
            this.profile = this.loginService.loginUser;
        }
    }

    ngOnInit(){
        this.getInvoicePerDriver();
    }
     
    getInvoicePerDriver(){
        this.invoiceService.GetInvoices(this.profile.id)
                            .then(value => this.invoiceList = value)
    }
    
    onclickShowInvoiceDetails(value : Invoice){
        this.invoiceRowService.getInvoiceRowByInvoice(value.id)
                                .then(value => this.invoiceRowList = value)
                                .then(() => {
                                    for(let i = 0; i < this.invoiceRowList.length; i++){
                                        this.totalPrice =+ this.invoiceRowList[i].price;
                                    }
                                })
                                .then(() => {
                                    if(this.totalPrice != 0){
                                        this.paypalButtonStatus = true;
                                        this.price = this.totalPrice.toString()
                                        this.paymentFunction(this.price)
                                    }
                                })
    }
    paymentFunction(value : string){
        (window as any).paypal.Button.render({
            env: 'sandbox', // sandbox | production

            // PayPal Client IDs - replace with your own
            // Create a PayPal app: https://developer.paypal.com/developer/applications/create
            client: {
                sandbox: 'AcEbfF3qHu5ozrge4EiwvbWm8LeMKUmY8NX1KPTJlSEAeoc32XoW_Jn4vhi3LTL2XHmjFjLTHq4t1L0i',
                production: '<insert production client id>'
            },
            style: {
                label: 'checkout', // checkout | credit | pay
                size: 'small',    // small | medium | responsive
                shape: 'pill',     // pill | rect
                color: 'blue'      // gold | blue | silver
            },

            // Show the buyer a 'Pay Now' button in the checkout flow
            commit: true,

            // payment() is called when the button is clicked
            payment: function (data, actions) {

                // Make a call to the REST api to create the payment
                return actions.payment.create({
                    transactions: [
                        {
                            amount: { total: value, currency: 'EUR' }
                        }
                    ]
                });
            },

            // onAuthorize() is called when the buyer approves the payment
            onAuthorize: function (data, actions) {

                // Make a call to the REST api to execute the payment
                return actions.payment.execute().then(function () {
                    window.alert('Payment Complete!');
                });
            }

        }, '#paypal-button');
        this.paypalButtonStatus = false;
    }
    
}