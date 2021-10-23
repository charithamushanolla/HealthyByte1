package com.rest.dto;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import java.util.Properties;

public class EmailSending {
	public void sendEmail(Client client){

		System.out.println("In mail sending");

		       final String username = "rachithachalla982@gmail.com";
		       final String password = "2001rachitha";
		       
		       String sendMessage = "GREETINGS FROM HEALTHYBYTE!!"
		       		+ "This mail is to confirm that you successfully created an acount in our HEALTHYBYTE!!!";
		       Properties prop = new Properties();
		       prop.put("mail.smtp.host", "smtp.gmail.com");
		       prop.put("mail.smtp.port", "587");
		       prop.put("mail.smtp.auth", "true");
		       prop.put("mail.smtp.starttls.enable", "true"); //TLS

		       Session session = Session.getInstance(prop,
		               new javax.mail.Authenticator() {
		                   protected PasswordAuthentication getPasswordAuthentication() {
		                       return new PasswordAuthentication(username, password);
		                   }
		               });

		       try {

		           Message message = new MimeMessage(session);
		           message.setFrom(new InternetAddress( "rachithachalla982@gmail.com"));
		           message.setRecipients(
		                   Message.RecipientType.TO,
		                   InternetAddress.parse(client.getEmailId())
		           );
		           message.setSubject("Confirmation mail ");
		           message.setText(sendMessage);

		           Transport.send(message);

		           System.out.println("Done");

		       } catch (MessagingException e) {
		           e.printStackTrace();
		       }
		   }
}
