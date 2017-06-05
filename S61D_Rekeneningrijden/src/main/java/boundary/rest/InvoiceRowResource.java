/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package boundary.rest;

import domain.InvoiceRow;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import service.InvoiceRowService;

/**
 *
 * @author lino_
 */
@Stateless
@Path("InvoiceRow")
public class InvoiceRowResource {
    @Inject
    InvoiceRowService invoiceRowService;
    @GET
    @Path("GetInvoiceRows/{id}")
    public List<InvoiceRow> getInvoiceRowsByInvoice(@PathParam("id") int id) {
        return invoiceRowService.getInvoiceRowByInvoiceId(id);
    }
}
