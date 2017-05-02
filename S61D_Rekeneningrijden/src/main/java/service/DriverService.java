/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import dao.DriverDAO;
import domain.Driver;
import domain.Vehicle;
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
    
    public Driver createNewDriver(Driver driver){
        return driverDao.createNewDriver(driver);
    }

    public Driver getDriver(int id) {
        return driverDao.getDriver(id);
    }
    
}