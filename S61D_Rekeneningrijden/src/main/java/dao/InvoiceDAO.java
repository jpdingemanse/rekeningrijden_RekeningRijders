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
        em.merge(invoice);
    }
    
    public Invoice getInvoice(int id){
        return em.find(Invoice.class, id);
    }

    public Invoice createInvoice(Invoice invoice) {
        Invoice result = em.find(Invoice.class, invoice.getId());
        if(result != null){
            em.persist(invoice);
            em.flush();
            return em.find(Invoice.class, invoice.getId());
        }
        return result;
        
    }
}
