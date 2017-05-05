export class Request {
    constructor(
        public id: number, 
        public driverId: number, 
        public licensePlate: string,
        public status: boolean ) { }

}