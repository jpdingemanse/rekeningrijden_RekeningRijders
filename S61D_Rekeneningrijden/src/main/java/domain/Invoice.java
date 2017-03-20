/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package domain;

import java.io.Serializable;
import java.math.BigInteger;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author victo
 */
@Entity
public class Invoice implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    BigInteger id;
    long timestamp;
    boolean paid;

    public Invoice() {
    }

    public Invoice(BigInteger id, long timestamp, boolean paid) {
        this.id = id;
        this.timestamp = timestamp;
        this.paid = paid;
    }
    
    
}
