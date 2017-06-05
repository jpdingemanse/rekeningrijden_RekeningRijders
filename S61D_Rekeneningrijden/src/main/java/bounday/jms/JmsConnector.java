/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bounday.jms;

//import javax.jms.*;
//import org.apache.activemq.ActiveMQConnectionFactory;

/**
 *
 * @author lino_
 */
public class JmsConnector {
//    public void getRideFromQueue(){
//        try {
//                // Create a ConnectionFactory
//                ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory("tcp://192.168.24.41:61616");
// 
//                // Create a Connection
//                Connection connection = connectionFactory.createConnection();
//                connection.start();
// 
//                // Create a Session
//                Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
// 
//                // Create the destination (Topic or Queue)
//                Destination destination = session.createQueue("internalfactuur.queue");
// 
//                // Create a MessageProducer from the Session to the Topic or Queue
//                MessageConsumer consumer = session.createConsumer(destination);
//                
//                consumer.setMessageListener((msg) -> {
//                    try {
//                        if (msg instanceof TextMessage) {
//                            TextMessage textMessage = (TextMessage) msg;
//                            System.out.println("Received message--"
//                                    + textMessage.getText() + "'");
//
//                        }
//                    } catch (JMSException e) {
//                        System.out.println("Caught:" + e);
//                        e.printStackTrace();
//                    }
//                
//                });
////                Message message = consumer.receive(1000);
////                
////                if (message instanceof TextMessage) {
////                    TextMessage textMessage = (TextMessage) message;
////                    String text = textMessage.getText();
////                    CArigattor(text);
////                } else {
////                    System.out.println("Received: " + message);
////                }
//                // Clean up
////                consumer.close();
////                session.close();
////                connection.close();
//            }
//            catch (Exception e) {
//                System.out.println("Caught: " + e);
//                e.printStackTrace();
//            }
//    }
}
