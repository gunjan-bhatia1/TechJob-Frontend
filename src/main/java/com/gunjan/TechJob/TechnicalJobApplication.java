package com.gunjan.TechJob;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//retrieve all technicians(Get/technicians/{technician_name}/list)
//delete a technician Delete/technicians/{technician_name}/list/{technician_id}
//edit/update
//PUT /users/{technician_name}/technician/{technician_id}
//create a new technician
//Post/technicians/{technician_name}/list/
@Configuration
@ComponentScan
@EnableAutoConfiguration
@EnableJpaRepositories
public class TechnicalJobApplication {

	public static void main(String[] args) {
		SpringApplication.run(TechnicalJobApplication.class, args);
	}

}
