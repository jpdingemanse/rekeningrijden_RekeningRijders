/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package boundary.bean;

import com.google.gson.Gson;
import domain.Invoice;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.ActivationConfigProperty;
import javax.ejb.MessageDriven;
import javax.inject.Inject;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.TextMessage;
import service.InvoiceService;

/**
 *
 * @author ruthgervandeneikhof
 */
@MessageDriven(name = "testmdb", activationConfig = {
    @ActivationConfigProperty(propertyName = "destinationLookup", propertyValue = "jms/Admin")
    ,
    @ActivationConfigProperty(propertyName = "destinationType", propertyValue = "javax.jms.Queue")
    ,
    @ActivationConfigProperty(propertyName = "destination", propertyValue = "Admin")
    ,
    @ActivationConfigProperty(propertyName = "resourceAdapter", propertyValue = "activemq-rar-5.12.0")

})
public class MessageBean implements MessageListener {
    @Inject
    InvoiceService is;
    
    public MessageBean() {
    }

    @Override
    public void onMessage(Message message) {
        Gson gson = new Gson();
        System.out.println("Got message (RekeningRijden) " + message);
        TextMessage msg = (TextMessage) message;
        try {
            Invoice invoice = gson.fromJson(msg.getText(), Invoice.class);
            is.createInvoice(invoice);
        } catch (JMSException ex) {
            Logger.getLogger(MessageBean.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
