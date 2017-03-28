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
 * @author ruthgervandeneikhof
 */
@Stateless
public class UserDao {
    @PersistenceContext
    EntityManager em;
    
    public boolean createNewDriver(Driver driver){
        try{
            em.persist(driver);
            return true;
        }catch (Exception ex){
            return false;
        }
    }
}
