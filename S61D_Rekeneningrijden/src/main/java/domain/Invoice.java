/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package domain;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

/**
 *
 * @author victo
 */
@NamedQueries({
    @NamedQuery(name="Invoice.getInvoices", query="Select i from Invoice i where i.driver = :billedDriver")
})
@Entity
public class Invoice implements Serializable {
    @Id
    private int id;
    private long timestamp;
    private boolean paid;
    private String month;
    
    @ManyToOne
    private Driver driver;
    
    @OneToMany(mappedBy="invoice")
    private List<InvoiceRow> invoiceRows;
    
    public Invoice() {
    }

    public Invoice(int id, long timestamp, boolean paid, String maand) {
        this.id = id;
        this.timestamp = timestamp;
        this.paid = paid;
        this.month = maand;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public boolean isPaid() {
        return paid;
    }

    public void setPaid(boolean paid) {
        this.paid = paid;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public List<InvoiceRow> getInvoiceRows() {
        return invoiceRows;
    }

    public void setInvoiceRows(List<InvoiceRow> invoiceRows) {
        this.invoiceRows = invoiceRows;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    
}
