/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package factory;

import com.google.gson.Gson;
import domain.Invoice;
import domain.RequestAddVehicle;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;

/**
 *
 * @author lino_
 */
@Stateless
public class InvoiceTransmitter {
    public boolean SendPayment(Invoice invoice) {
        Gson gson = new Gson();
        String jsonToString = gson.toJson(invoice);
        try {
            String url = "http://192.168.24.46:8080/S61D_RekeningAdministratie/api/Invoice/UpdatePayment";
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
}
