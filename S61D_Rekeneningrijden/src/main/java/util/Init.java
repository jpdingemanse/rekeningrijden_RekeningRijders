/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package util;

import dao.DriverDAO;
import dao.InvoiceDAO;
import dao.InvoiceRowDAO;
import dao.VehicleDAO;
import domain.Driver;
import domain.Invoice;
import domain.InvoiceRow;
import domain.Vehicle;
import java.math.BigInteger;
import java.sql.Timestamp;
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
    @Inject
    InvoiceRowDAO invoiceRowDAO;
    
    
    @PostConstruct
    public void Init() {
        Driver driver = driverDAO.createNewDriver(new Driver("Lino", "Thaencharun", "5611SH", "Eindhoven", "Lino_thaencharun@hotmail.com", "lino1", "p@33word", "10c", "0614387088"));
        
        Vehicle vehicle = vehicleDAO.createNewVehicle(new Vehicle("12-test-1"));
        vehicle.setOwner(driver);
        vehicleDAO.addVehicleToDriver(vehicle);
        
        Vehicle vehicle1 = vehicleDAO.createNewVehicle(new Vehicle("12-test-2"));
        vehicle.setOwner(driver);
        vehicleDAO.addVehicleToDriver(vehicle1);
        
        Timestamp timeStamp = new Timestamp(System.currentTimeMillis());
        Invoice inserInvoice1 = new Invoice(1, timeStamp.getTime(), false, "Mei");
        inserInvoice1.setDriver(driver);
        Invoice inserInvoice2 = new Invoice(2, timeStamp.getTime(), false, "Juni");
        inserInvoice2.setDriver(driver);
        inserInvoice1 = invoiceDAO.createInvoice(inserInvoice1);
        inserInvoice2 = invoiceDAO.createInvoice(inserInvoice2);
        
        InvoiceRow invoiceRow = new InvoiceRow(1, 10, "Test", inserInvoice1);
        invoiceRow.setVehicle(vehicle);
        invoiceRowDAO.createInvoiceRow(invoiceRow);
        
        InvoiceRow invoiceRow1 = new InvoiceRow(2, 20, "Test", inserInvoice1);
        invoiceRow1.setVehicle(vehicle1);
        invoiceRowDAO.createInvoiceRow(invoiceRow1);
    }
    
}
