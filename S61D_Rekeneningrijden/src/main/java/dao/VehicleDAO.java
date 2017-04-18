/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import domain.Vehicle;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;



/**
 *
 * @author lino_
 */
@Stateless
public class VehicleDAO {
    
    @PersistenceContext
    EntityManager em;

    public VehicleDAO() {
    }
    
    public Vehicle createNewVehicle(Vehicle vehicle){
        em.persist(vehicle);
        em.flush();
        return em.find(Vehicle.class, vehicle.getLicensePlate());
    }   
    
    
    public Vehicle addVehicleToDriver(Vehicle vehicle){
        Vehicle tempResult = em.find(Vehicle.class, vehicle.getLicensePlate());
        tempResult = vehicle;
        em.merge(tempResult);
        return em.find(Vehicle.class, vehicle.getLicensePlate());
    }
    public List<Vehicle> getVehicleByOwner(int id){
        return em.createQuery("select v from Vehicle v where v.owner.id = :id").setParameter("id", id).getResultList();
    }
    
     public List<Vehicle> getAllVehicles(){
        return em.createQuery("select v from Vehicle v").getResultList();
        
    }
    
}