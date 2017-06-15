/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import dao.InvoiceRowDAO;
import dao.VehicleDAO;
import domain.InvoiceRow;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;

/**
 *
 * @author lino_
 */
@Stateless
public class InvoiceRowService {
    @Inject
    InvoiceRowDAO invoiceRowDao;
    
    @Inject
    VehicleDAO vehicleDao;
    
    public List<InvoiceRow> getInvoiceRowByInvoiceId(int id){
        return invoiceRowDao.getInvoicesByInvoiceId(id);
    }
    
    public void createNewInvoiceRow(InvoiceRow irs){
        if(vehicleDao.checkVehicle(irs.getVehicle()))
        invoiceRowDao.createInvoiceRow(irs);
    }
}
