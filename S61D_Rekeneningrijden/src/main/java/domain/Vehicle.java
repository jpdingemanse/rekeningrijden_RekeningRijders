/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package domain;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 *
 * @author lino_
 */
@Entity
public class Vehicle implements Serializable{
    @Id
    private String licensePlate;
    

    @ManyToOne
    private Driver owner;

    public Vehicle() {
    }

    public Vehicle(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public Driver getOwner() {
        return owner;
    }

    public void setOwner(Driver owner) {
        this.owner = owner;
    }
    
    
}
///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//package domain;
//
//import java.io.Serializable;
//import java.util.ArrayList;
//import java.util.List;
//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.ManyToOne;
//import javax.persistence.OneToMany;
//import javax.xml.bind.annotation.XmlRootElement;
//import javax.xml.bind.annotation.XmlTransient;
//
///**
// *
// * @author victo
// */
//@Entity
//@XmlRootElement
//public class Vehicle implements Serializable {
//    @Id
//    String licensePlate;
//    @OneToMany(mappedBy = "vehicle")
//    private List<Movement> movement;
//    @ManyToOne
//    Driver driver;
//    
//
//    public Vehicle() {
//    }
//
//    public Vehicle(String licensePlate, Driver driver) {
//        this.licensePlate = licensePlate;
//        this.movement = new ArrayList<>();
//        this.driver = driver;
//    }
//
//    public String getLicensePlate() {
//        return licensePlate;
//    }
//
//    public void setLicensePlate(String licensePlate) {
//        this.licensePlate = licensePlate;
//    }
//
//    @XmlTransient
//    public List<Movement> getMovement() {
//        return movement;
//    }
//
//    public void setMovement(List<Movement> movement) {
//        this.movement = movement;
//    }
//    
//    
//}
