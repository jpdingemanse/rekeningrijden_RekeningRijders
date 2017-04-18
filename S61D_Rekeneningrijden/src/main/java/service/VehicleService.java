/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import dao.VehicleDAO;
import domain.Vehicle;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;

/**
 *
 * @author lino_
 */
@Stateless
public class VehicleService {
    @Inject
    VehicleDAO vehicleDAO;
    
    public Vehicle createNewVehicle(Vehicle vehicle){
        return vehicleDAO.createNewVehicle(vehicle);
    }

    public Vehicle addVehicleToDriver(Vehicle vehicle) {
        return vehicleDAO.addVehicleToDriver(vehicle);
    }
    
    public List<Vehicle> getVehicleByOwner(int id){
        return vehicleDAO.getVehicleByOwner(id);
    }
    
    public List<Vehicle> getAllVehicles()
    {
        return vehicleDAO.getAllVehicles();
    }
    
}
