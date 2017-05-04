/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package boundary.rest;

import domain.Driver;
import domain.Invoice;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import service.DriverService;
import service.InvoiceService;

/**
 *
 * @author victo
 */
@Stateless
@Path("Invoice")
public class InvoiceResource {
    @Inject
    InvoiceService invoiceService;
    @Inject
    DriverService driverService;
    
    @GET
    @Path("GetInvoices/{id}")
    public List<Invoice> getInvoices(@PathParam("id")int id){
        Driver i = new Driver();
        i = driverService.getDriver(id);
        List<Invoice> invoices = invoiceService.getInvoices(i);
        return invoices;
    }
}
