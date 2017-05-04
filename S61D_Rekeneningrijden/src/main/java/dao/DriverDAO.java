/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import domain.Driver;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author lino_
 */
@Stateless
public class DriverDAO {
    @PersistenceContext
    EntityManager em;
    
    public DriverDAO(){
        
    }
    
    public Driver createNewDriver(Driver driver){
        em.persist(driver);
        em.flush();
        return em.find(Driver.class, driver.getId());
    }

    public Driver getDriver(int id) {
        Driver result = em.find(Driver.class, id);
        return result;
    }

    public Driver getLogin(String username, String password) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    
}
