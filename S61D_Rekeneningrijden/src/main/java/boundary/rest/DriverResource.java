/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package boundary.rest;


import domain.Driver;
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
    
    @POST
    @Path("CreateDriverFromAdministratie")
    @Consumes("application/json")
    public Driver createNewDriverFromAdministratie(Driver driver){
        System.out.println("boundary.rest.DriverResource.createNewDriver()");
        return driverService.createFromAdministratieNewDriver(driver);
    }
    
    @GET
    @Path("GetDriver/{id}")
    public Driver getDriver(@PathParam("id")int id){
        return driverService.getDriver(id);
    }
    
    @GET
    @Path("CheckLogin/{username}/{password}")
    public Driver getLogin(@PathParam("username")String username, @PathParam("password")String password){
        return driverService.getLogin(username, password);
    }
    
    
}