/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package factory;

import com.google.gson.Gson;
import domain.RequestAddVehicle;
import domain.Vehicle;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import static javax.ws.rs.core.HttpHeaders.USER_AGENT;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author lino_
 */
@Stateless
public class VehicleTransmitter {
     public boolean SendRequestAddVehicleToDriver(RequestAddVehicle request) {
        Gson gson = new Gson();
        String jsonToString = gson.toJson(request);
        try {
            String url = "http://192.168.24.46:8080/S61D_RekeningAdministratie/api/Request/RequestAddVehicleToDriver";
            DefaultHttpClient httpClient = new DefaultHttpClient();
            HttpPost postRequest = new HttpPost(url);

            StringEntity input = new StringEntity(jsonToString);
            input.setContentType("application/json");
            postRequest.setEntity(input);

            HttpResponse response = httpClient.execute(postRequest);
            int httpCode = response.getStatusLine().getStatusCode();

            if (httpCode != 200) {
                throw new RuntimeException("Failed : HTTP error code : "
                        + response.getStatusLine().getStatusCode());
            }
            return true;
            
        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(DriverTransmitter.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        } catch (IOException ex) {
            Logger.getLogger(DriverTransmitter.class.getName()).log(Level.SEVERE, null, ex);
            return false;

        }
    }
    public List<RequestAddVehicle> GetAllRequest(int id){
        StringBuilder result = new StringBuilder();
        RequestAddVehicle tempRequest = null;
        List<RequestAddVehicle> resultRequest = new ArrayList<>();
        try {
            String url = "http://192.168.24.46:8080/S61D_RekeningAdministratie/api/Request/GetAllRequestWithId/" + id;
            HttpClient client = new DefaultHttpClient();
            HttpGet request = new HttpGet(url);

            // add request header
            request.addHeader("User-Agent", USER_AGENT);

            HttpResponse response = client.execute(request);
            
            BufferedReader rd = new BufferedReader(
                    new InputStreamReader(response.getEntity().getContent()));
            
            Gson gson = new Gson();
            String line = "";
            while ((line = rd.readLine()) != null) {
                result.append(line);
                
            }
            

            JSONArray json = new JSONArray(result.toString());
            for(int i = 0; i < json.length(); i++){
                JSONObject temp = json.getJSONObject(i);
                int resultId = temp.getInt("driverId");
                String licensePlate = temp.getString("licensePlate");
                boolean status = temp.getBoolean("status");
                tempRequest = new RequestAddVehicle(resultId, licensePlate, status);
                resultRequest.add(tempRequest);
            }
            
        } catch (IOException ex) {
            Logger.getLogger(Vehicle.class.getName()).log(Level.SEVERE, null, ex);
        } catch (JSONException ex) {
             Logger.getLogger(VehicleTransmitter.class.getName()).log(Level.SEVERE, null, ex);
         }
        return resultRequest;
    }
}
