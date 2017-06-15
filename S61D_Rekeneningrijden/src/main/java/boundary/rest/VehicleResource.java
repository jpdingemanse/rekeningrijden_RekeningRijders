/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package boundary.rest;


import domain.RequestAddVehicle;
import domain.Vehicle;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import service.VehicleService;

/**
 *
 * @author lino_
 */
@Stateless
@Path("Vehicle")
public class VehicleResource {
    @Inject
    VehicleService vehicleService;
    
    @POST
    @Path("CreateVehicle")
    @Consumes("application/json")
    public Vehicle createVehicle(Vehicle vehicle){
        return vehicleService.createNewVehicle(vehicle);
    }
    
    @POST
    @Path("AddVehicleToDriver")
    @Consumes("application/json")
    public Vehicle addVehicleToDriver(Vehicle vehicle){
        return vehicleService.addVehicleToDriver(vehicle);
    }
    
    @GET
    @Path("GetAllVehicle/{id}")
    public List<Vehicle> getVehicleById(@PathParam("id")int id){
        return vehicleService.getVehicleByOwner(id);
    }
    
    @POST
    @Path("NewRequest")
    @Consumes("application/json")
    public boolean NewRequest(RequestAddVehicle request){
        return vehicleService.transmitNewRequest(request);
    }
    
    @GET
    @Path("GetAllRequest/{id}")
    public List<RequestAddVehicle> getAllRequest(@PathParam("id")int id){
        return vehicleService.getAllReQuest(id);
    }
    
    @POST
    @Path("UpdateICan")
    @Consumes("application/json")
    public boolean updateICan(Vehicle vehicle){
        return vehicleService.updateICan(vehicle);
    }
}