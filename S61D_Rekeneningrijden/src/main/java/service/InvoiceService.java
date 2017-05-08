/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import dao.InvoiceDAO;
import dao.InvoiceRowDAO;
import domain.Driver;
import domain.Invoice;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;

/**
 *
 * @author victo
 */
@Stateless
public class InvoiceService {
    @Inject
    InvoiceDAO invoiceDao;
    @Inject
    InvoiceRowDAO invoiceRowDao;
    
    public List<Invoice> getInvoices(Driver driver){
        List<Invoice> invoices;
        invoices = invoiceDao.getInvoices(driver);
        for(Invoice i : invoices){
            i.setInvoiceRows(invoiceRowDao.getInvoices(i));
        }
        return invoices;
    }
    
    public Invoice getInvoice(int id){
        return invoiceDao.getInvoice(id);
    }
    
    public void invoicePaid(Invoice invoice){
        invoice.setPaid(true);
        invoiceDao.invoicePaid(invoice);
    }

    public Invoice createInvoice(Invoice invoice) {
        return invoiceDao.createInvoice(invoice);
    }
}
