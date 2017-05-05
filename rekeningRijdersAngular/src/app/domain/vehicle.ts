import { Driver } from "app/domain/driver";

export class Vehicle {
    public licensePlate: string;
    public owner: Driver;
    constructor() { }

    setDriver(driver: Driver) {
        this.owner = driver;
    }
    setLicensePlate(licensePlate: string) {
        this.licensePlate = licensePlate;
    }
    
}