/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package domain;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import org.eclipse.persistence.jpa.jpql.parser.DateTime;

/**
 *
 * @author lino_
 */
@Entity
@NamedQueries({
    @NamedQuery(name="Beacon.getByIcan", query="Select b from Beacon b where b.iCan = :ican AND b.dateTime LIKE :date"),
    @NamedQuery(name="Beacon.getByPeriod", query="Select b from Beacon b where b.iCan = :ican AND b.dateTime > :dateFrom AND b.dateTime < :dateTo"),


})
public class Beacon implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String iCan;
    private double latitude;
    private double longitude;
    private String dateTime;
    private String  signature; 

    public Beacon() {
    }
   

    public Beacon(String iCan, double latitude, Double longitude, String dateTime) {
        this.iCan = iCan;
        this.latitude = latitude;
        this.longitude = longitude;
        this.dateTime = dateTime;
    }

    public Beacon(String iCan, double latitude, double longitude, String dateTime, String signature) {
        this.iCan = iCan;
        this.latitude = latitude;
        this.longitude = longitude;
        this.dateTime = dateTime;
        this.signature = signature;
    }
    
    
    public String getiCan() {
        return iCan;
    }

    public void setiCan(String iCan) {
        this.iCan = iCan;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }
    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }



  
    
    
}
