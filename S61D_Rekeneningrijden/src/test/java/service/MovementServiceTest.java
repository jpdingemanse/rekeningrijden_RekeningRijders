/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import dao.MovementDao;
import domain.Movement;
import domain.Vehicle;
import java.util.List;
import javax.ejb.embeddable.EJBContainer;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import org.mockito.MockitoAnnotations;
import org.mockito.runners.MockitoJUnitRunner;

/**
 *
 * @author victo
 */
@RunWith(MockitoJUnitRunner.class)
public class MovementServiceTest {

    private MovementService ms;
    @Mock
    MovementDao md;
    
    public MovementServiceTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of getAllMovements method, of class MovementService.
     */
    @Test
    public void testGetAllMovements() throws Exception {
        Vehicle vehicle = mock(Vehicle.class);
        
        ms.getAllMovements(vehicle);
        verify(md, Mockito.times(1)).getAllMovements(vehicle);
    }
    
}
