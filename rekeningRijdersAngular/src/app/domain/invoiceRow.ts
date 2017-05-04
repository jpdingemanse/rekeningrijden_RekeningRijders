import { Invoice } from "./invoice"

export class InvoiceRow {
    constructor(
        public id: number,
        public price: number,
        public description: string,
        public invoice: Invoice
    ) {

    }
}