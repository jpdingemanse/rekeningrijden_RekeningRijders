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
import factory.InvoiceTransmitter;
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
    @Inject
    InvoiceTransmitter invoiceTransmitter;
    
    public List<Invoice> getInvoices(Driver driver){
        List<Invoice> invoices;
        invoices = invoiceDao.getInvoices(driver);
        return invoices;
    }
    
    public Invoice getInvoice(int id){
        return invoiceDao.getInvoice(id);
    }
    
    public void invoicePaid(Invoice invoice){
        invoice.setPaid(true);
        invoiceDao.invoicePaid(invoice);
        invoiceTransmitter.SendPayment(invoice);
        
    }

    public Invoice createInvoice(Invoice invoice) {
        return invoiceDao.createInvoice(invoice);
    }
}
