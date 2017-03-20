/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package domain;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author victo
 */
@NamedQuery(name = "Movement.findMovement",
        query = "SELECT m FROM Movement m where m.vehicle = :vehicle")
@Entity
@XmlRootElement
public class Movement implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    String id;
    @ManyToOne
    private Vehicle vehicle;

    public Movement() {
    }

    public Movement(String id, Vehicle vehicle) {
        this.id = id;
        this.vehicle = vehicle;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
    
    
}
