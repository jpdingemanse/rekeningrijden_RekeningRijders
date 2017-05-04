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
    @NamedQuery(name="Invoice.getInvoices", query="Select i from Invoice i where i.billedDriver = :billedDriver")
})
@Entity
public class Invoice implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    BigInteger id;
    long timestamp;
    boolean paid;
    String maand;
    
    @ManyToOne
    Driver billedDriver;
    
    @OneToMany(mappedBy="invoiceParent")
    private List<InvoiceRow> invoiceRows;
    
    public Invoice() {
    }

    public Invoice(BigInteger id, long timestamp, boolean paid, String maand) {
        this.id = id;
        this.timestamp = timestamp;
        this.paid = paid;
        this.maand = maand;
    }

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
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

    public Driver getBilledDriver() {
        return billedDriver;
    }

    public void setBilledDriver(Driver billedDriver) {
        this.billedDriver = billedDriver;
    }

    public List<InvoiceRow> getInvoiceRows() {
        return invoiceRows;
    }

    public void setInvoiceRows(List<InvoiceRow> invoiceRows) {
        this.invoiceRows = invoiceRows;
    }

    public String getMaand() {
        return maand;
    }

    public void setMaand(String maand) {
        this.maand = maand;
    }
}
