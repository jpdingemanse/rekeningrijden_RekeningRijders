/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package boundary.rest;


import dao.DriverDAO;
import domain.Driver;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import service.DriverService;

/**
 *
 * @author lino_
 */
@Stateless
@Path("Driver")
public class DriverResource {
    @Inject
    DriverService driverService;
    
    @POST
    @Path("CreateDriver")
    @Consumes("application/json")
    public Driver createNewDriver(Driver driver){
        return driverService.createNewDriver(driver);
    }
    
    @GET
    @Path("GetDriver/{id}")
    public Driver getDriver(@PathParam("id")int id){
        return driverService.getDriver(id);
    }
    
    
    
    
}