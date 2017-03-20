/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author victo
 */
@NamedQuery(name = "Driver.findDriver",
        query = "SELECT d FROM Driver u where d.id = :id")
@Entity
@XmlRootElement
public class Driver implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    String id;
    String name;
    String postalCode;
    String City;
    String eMail;
    String username;
    String password;
    String housenumber;
    String PhoneNumber;
    @OneToMany(mappedBy = "driver")
    private List<Vehicle> vehicle;
    public Driver(){
        
    }
    
    public Driver(String name, String id, String postalCode, String City, String eMail, String username, String password, String housenumber, String PhoneNumber) {
        this.name = name;
        this.id = id;
        this.postalCode = postalCode;
        this.City = City;
        this.eMail = eMail;
        this.username = username;
        this.password = password;
        this.housenumber = housenumber;
        this.PhoneNumber = PhoneNumber;
        this.vehicle = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String City) {
        this.City = City;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getHousenumber() {
        return housenumber;
    }

    public void setHousenumber(String housenumber) {
        this.housenumber = housenumber;
    }

    public String getPhoneNumber() {
        return PhoneNumber;
    }

    public void setPhoneNumber(String PhoneNumber) {
        this.PhoneNumber = PhoneNumber;
    }

    @XmlTransient
    public List<Vehicle> getVehicle() {
        return vehicle;
    }

    public void setVehicle(List<Vehicle> vehicle) {
        this.vehicle = vehicle;
    }
    
    
    
            
            
}
