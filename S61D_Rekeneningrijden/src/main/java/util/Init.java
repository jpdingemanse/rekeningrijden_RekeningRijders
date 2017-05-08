/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package util;

import dao.DriverDAO;
import dao.InvoiceDAO;
import dao.VehicleDAO;
import domain.Driver;
import domain.Invoice;
import domain.Vehicle;
import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.inject.Inject;

/**
 *
 * @author lino_
 */
@Startup
@Singleton
public class Init {
    @Inject
    DriverDAO driverDAO;
    @Inject
    InvoiceDAO invoiceDAO;
    @Inject
    VehicleDAO vehicleDAO;
    
    
    @PostConstruct
    public void Init() {
        Driver driver = driverDAO.createNewDriver(new Driver("Lino", "Thaencharun", "5611SH", "Eindhoven", "Lino_thaencharun@hotmail.com", "lino1", "p@33word", "10c", "0614387088"));
        Vehicle vehicle = vehicleDAO.createNewVehicle(new Vehicle("12-test-2"));
        vehicle.setOwner(driver);
        vehicleDAO.addVehicleToDriver(vehicle);
        
        
        
    }
    
}
