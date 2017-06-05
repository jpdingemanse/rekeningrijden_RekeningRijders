import { Driver } from "app/domain/driver";

export class Vehicle {
    public licensePlate: string;
    public iCan: string;
    public owner: Driver;
    constructor() { }

    setDriver(driver: Driver) {
        this.owner = driver;
    }
    setLicensePlate(licensePlate: string) {
        this.licensePlate = licensePlate;
    }
     setICan(iCan: string) {
        this.iCan = iCan;
    }
    
}