/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import domain.Invoice;
import domain.InvoiceRow;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author victo
 */
@Stateless
public class InvoiceRowDAO {
    @PersistenceContext
    EntityManager em;
    
    public List<InvoiceRow> getInvoices(Invoice invoice){
        return (List<InvoiceRow>) em.createNamedQuery("Invoicerow.getInvoiceRows", InvoiceRow.class).setParameter("invoice", invoice).getResultList();
    }
}
