package com.gunjan.TechJob.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gunjan.TechJob.Technician.technicianJpaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmailController {



  @Autowired
  private EmailService emailService;

  @Autowired
	private technicianJpaRepository technicianService;
 //some other code

  @PostMapping("/technicianId/{id}/email")
  public ResponseEntity<Email> enviarEmail(  @RequestBody Email email, @PathVariable Long id){
    try {
    	
    	String replyEmail=technicianService.findById(id).get().getEmail();
      emailService.sendEmail(email,replyEmail);
      return new ResponseEntity<>(email,  HttpStatus.OK);
    } catch( MailException e){
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }


  }
  

}
