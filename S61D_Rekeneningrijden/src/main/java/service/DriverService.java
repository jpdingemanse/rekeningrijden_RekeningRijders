/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import dao.DriverDAO;
import domain.Driver;
import factory.DriverTransmitter;
import javax.ejb.Stateless;
import javax.inject.Inject;

/**
 *
 * @author lino_
 */
@Stateless
public class DriverService {
    @Inject
    DriverDAO driverDao;
    
    @Inject 
    DriverTransmitter driverTransmitter;
    
    public Driver createNewDriver(Driver driver){
        Driver createdDriver = driverDao.createNewDriver(driver);
        driverTransmitter.SendCreatedDriverToAdministrator(createdDriver);
        return driver;
    }
    
     public Driver createFromAdministratieNewDriver(Driver driver){
        Driver createdDriver = driverDao.createNewDriver(driver);
        return createdDriver;
    }

    public Driver getDriver(int id) {
        return driverDao.getDriver(id);
    }

    public Driver getLogin(String username, String password) {
        return driverDao.getLogin(username, password);
    }

    
}