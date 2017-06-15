/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import dao.BeaconDAO;
import domain.Beacon;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.ejb.Stateless;
import javax.inject.Inject;
import factory.VehicleTransmitter;

/**
 *
 * @author lino_
 */
@Stateless
public class BeaconService {
    @Inject
    BeaconDAO beaconDAO;
    
    @Inject
    VehicleTransmitter vt;
    
    public boolean createNewBeacon(Beacon beacon){
        return beaconDAO.createNewBeacon(beacon);
    }
    
    public  List<Beacon> getAllRideByIcan(String iCan, String date){

        List<Beacon> tempResult = null;
        try {
           // tempResult = beaconDAO.getAllBeaconByIcan(iCan, date);
            tempResult =  vt.GetAllMovementsByIcanAndDate(iCan, date); 
        } catch (Exception ex){
            System.out.println(ex.getMessage());
            return null;
        }
//START
//TODO
//Commented because errors for sprint 2 just returning tempResult
//        Long timeStamp = 0L;
//        List<Beacon> resultList = new ArrayList<>();
//        int counter = 1;
//        String counterText = "";
//        for(Beacon b : tempResult){
//            if(timeStamp == 0){
//                timeStamp = b.getDateTime();
//                resultList.add(b);
//            }else{
//                if((b.getDateTime() - timeStamp.longValue()) <= 900){
//                    timeStamp = b.getDateTime();
//                    resultList.add(b);
//                }else{
//                    counterText = counter + "";
//                    result.put(counterText, resultList);
//                    counter++;
//                    timeStamp = b.getDateTime();
//                    Beacon lastBeacon = resultList.get(resultList.size() - 1);
//                    resultList = new ArrayList<>();
//                    resultList.add(lastBeacon);
//                    resultList.add(b);
//                }
//            }
//        }
//        counterText = counter + "";
//        result.put(counterText, resultList);
//END


//        List<Map<String, List<Beacon>>> output = new ArrayList<Map<String, List<Beacon>>>();
//        output.add(result);
       // return result;
       
       return tempResult;
    }
        
    public List<Beacon> getBeaconsById(int id){
        return beaconDAO.getBeaconsById(id);
    }

    public Double getAllRideByPeriod(String iCan, String dateFrom, String dateTo) {
        List<Beacon> tempResult = null;
        Double tempDistance = null;
        try {
            //tempResult = beaconDAO.getAllBeaconByPeriod(iCan, dateFrom, dateTo);
           // tempResult = beaconDAO.getAllBeaconByIcan(iCan, dateFrom);
            tempResult =  vt.GetAllMovementsByPeriod(iCan, dateFrom, dateTo); 
            Beacon prevBeacon = null;
            //Calculate distances between beacons
            for (Beacon beacon : tempResult) {
                //skip first beacon
                if ( prevBeacon == null){
                    prevBeacon = beacon;
                } else{
                    tempDistance = tempDistance + distance(prevBeacon.getLatitude(), prevBeacon.getLongitude(), beacon.getLatitude(), beacon.getLongitude());
                    prevBeacon = beacon;
                }
                
            }
            
        } catch (Exception ex){
            System.out.println(ex.getMessage());
        }
        System.out.println("Afstand is: " + tempDistance);
        return tempDistance;
    }

   private double distance(double lat1, double lat2, double lon1,
            double lon2) {

        final int R = 6371; // Radius of the earth

        double latDistance = Math.toRadians(lat2 - lat1);
        double lonDistance = Math.toRadians(lon2 - lon1);
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double distance = R * c * 1000; // convert to meters

        return Math.sqrt(distance);
    }
}
