/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import domain.Driver;
import domain.Invoice;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author victo
 */
@Stateless
public class InvoiceDAO {
    @PersistenceContext
    EntityManager em;
    
    public List<Invoice> getInvoices(Driver driver){
        return (List<Invoice>) em.createNamedQuery("Invoice.getInvoices", Invoice.class).setParameter("billedDriver", driver).getResultList();
    }
    
    public void invoicePaid(Invoice invoice){
        Invoice result = em.find(Invoice.class, invoice.getId());
        if(result != null){
            result.setPaid(true);
            em.merge(invoice);
        }
        
    }
    
    public Invoice getInvoice(int id){
        return em.find(Invoice.class, id);
    }

    public Invoice createInvoice(Invoice invoice) {
        Invoice in = new Invoice(invoice.getId(), invoice.getTimestamp(), false, invoice.getMonth());
        in.setDriver(new Driver(invoice.getDriver().getId(), invoice.getDriver().getName(), invoice.getDriver().getLastname(), invoice.getDriver().getPostalCode(), invoice.getDriver().getCity(), invoice.getDriver().getEmail(), invoice.getDriver().getUsername(), invoice.getDriver().getPassword(), invoice.getDriver().getHouseNumber(), invoice.getDriver().getPhoneNumber()));
        try{
            Invoice result = em.find(Invoice.class, invoice.getId());
            if(result == null){
                em.persist(in);
                em.flush();
                return em.find(Invoice.class, invoice.getId());
            }
            return result;
        }catch (Exception e){
            return null;
        }
        
    }

    public boolean checkInvoice(Invoice invoice) {
        List<Invoice> result = em.createNamedQuery("Invoice.checkInvoice").setParameter("month",invoice.getMonth()).setParameter("id", invoice.getDriver().getId()).getResultList();
        if(result.isEmpty()){
            return true;
        }
        return false;
    }
}
