/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package boundary.rest;

import domain.Movement;
import domain.Vehicle;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import static javax.ws.rs.core.MediaType.APPLICATION_JSON;
import service.MovementService;

/**
 *
 * @author victo
 */
@Stateless
@Path("Movement")
public class MovementResource {
    @Inject
    MovementService movementService;
    
    @GET
    @Produces(APPLICATION_JSON)
    @Path("getMovements")
    public List<Movement> getAllMovements(Vehicle vehicle){
        return movementService.getAllMovements(vehicle);
    }

}
