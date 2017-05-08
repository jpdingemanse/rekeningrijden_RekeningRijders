/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package domain;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.ArrayList;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

/**
 *
 * @author victo
 */
@NamedQueries({
    @NamedQuery(name="Invoicerow.getInvoiceRows", query="Select i from InvoiceRow i where i.invoice = :invoice")
})
@Entity
public class InvoiceRow implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    BigInteger id;
    double price;
    String description;

    @ManyToOne
    Invoice invoice;
    
    public InvoiceRow() {
    }

    public InvoiceRow(BigInteger id, double price, String description, Invoice invoice) {
        this.id = id;
        this.price = price;
        this.description = description;
        this.invoice = invoice;
    }

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
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
    
    
    
}
