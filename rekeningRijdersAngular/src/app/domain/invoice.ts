import { Driver } from "./driver"

export class Invoice {
    constructor(
        public id: number,
        public timestamp: number,
        public paid: boolean,
        public lat: number,
        public driver: Driver
    ) {

    }
}