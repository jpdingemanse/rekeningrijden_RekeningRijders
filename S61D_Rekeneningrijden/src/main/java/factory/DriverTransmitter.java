/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package factory;

import com.google.gson.Gson;
import domain.Driver;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;

/**
 *
 * @author lino_
 */
@Stateless
public class DriverTransmitter {

    public boolean SendCreatedDriverToAdministrator(Driver driver) {
        Gson gson = new Gson();
        String jsonToString = gson.toJson(driver);
        try {
            String url = "http://192.168.24.46:8080/S61D_RekeningAdministratie/api/Driver/CreateDriver";
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

        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(DriverTransmitter.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(DriverTransmitter.class.getName()).log(Level.SEVERE, null, ex);

        }
        return false;
    }
}
