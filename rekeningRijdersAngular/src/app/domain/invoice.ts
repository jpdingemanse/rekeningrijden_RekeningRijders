import { Driver } from "./driver"
import { InvoiceRow } from "./invoiceRow"

export class Invoice {
        public id: number;
        public timestamp: number;
        public paid: boolean;
        public lat: number;
        public driver: Driver;
        public invoiceRows: InvoiceRow[];

        constructor(){}

        setInVoiceRows(value: InvoiceRow[]){
            this.invoiceRows = value;
        }

        getInVoiceRows(){
            return this.invoiceRows;
        }

        setPaid(value: boolean){
            this.paid = value;
        }
    
}