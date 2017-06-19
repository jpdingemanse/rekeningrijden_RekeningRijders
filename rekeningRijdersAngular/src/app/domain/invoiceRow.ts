import { Invoice } from "./invoice"
import { Vehicle } from "app/domain/vehicle";

export class InvoiceRow {
    constructor(
        public id: number,
        public price: number,
        public description: string,
        public landCode: string,
        public invoice: Invoice,
        public vehicle: Vehicle
    ) {

    }
}