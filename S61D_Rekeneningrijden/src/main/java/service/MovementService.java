/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import dao.MovementDao;
import domain.Movement;
import domain.Vehicle;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;

/**
 *
 * @author victo
 */
@Stateless
public class MovementService {
    @Inject
    MovementDao movementDAO;
    
    public List<Movement> getAllMovements(Vehicle vehicle){
        return movementDAO.getAllMovements(vehicle);
    }
}
