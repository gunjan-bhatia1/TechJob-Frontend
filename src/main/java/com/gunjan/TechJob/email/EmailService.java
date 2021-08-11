package com.gunjan.TechJob.email;

import javax.mail.internet.InternetAddress;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
        
	@Autowired
    private JavaMailSender javaMailSender;

	
    public void sendEmail(Email email,String replyEmail) throws MailException {
        SimpleMailMessage mail = new SimpleMailMessage();
        System.out.println(email.recieverId);
      // mail.setFrom(email.getSenderId());
       mail.setReplyTo("gunjan.bhatia4084@gmail.com");
        mail.setTo(email.getRecieverId());
        mail.setSubject(email.getSubject());
        mail.setText(email.getInfo());
    
        javaMailSender.send(mail);
    }

    
}