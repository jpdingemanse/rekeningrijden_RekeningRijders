/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import domain.Driver;
import domain.Movement;
import domain.Vehicle;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author victo
 */
@Stateless
public class MovementDao {
    @PersistenceContext
    EntityManager em;
    
    public List<Movement> getAllMovements(Vehicle vehicle){
        Query query = em.createNamedQuery("Movement.findMovement");
        return (List<Movement>) query.getResultList();
    }
}
