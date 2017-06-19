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
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

/**
 *
 * @author victo
 */
@NamedQueries({
    @NamedQuery(name="Invoicerow.getInvoiceRows", query="Select i from InvoiceRow i where i.invoice.id = :id")
})
@Entity
public class InvoiceRow implements Serializable {
    @Id
    int id;
    double price;
    String description;
    String landCode;
    @ManyToOne
    Invoice invoice;
    
    @ManyToOne
    Vehicle vehicle;
    
    
    public InvoiceRow() {
    }

    public InvoiceRow(int id, double price, String description, Invoice invoice) {
        this.id = id;
        this.price = price;
        this.description = description;
        this.invoice = invoice;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Invoice getInvoice() {
        return invoice;
    }

    public void setInvoice(Invoice invoice) {
        this.invoice = invoice;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public String getLandCode() {
        return landCode;
    }

    public void setLandCode(String landCode) {
        this.landCode = landCode;
    }
    
}
