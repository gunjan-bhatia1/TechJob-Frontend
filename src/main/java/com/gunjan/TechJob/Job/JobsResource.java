package com.gunjan.TechJob.Job;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.gunjan.TechJob.Technician.Technicians;
import com.gunjan.TechJob.Technician.technicianJpaRepository;
import com.gunjan.TechJob.login.User;
import com.gunjan.TechJob.login.UserService;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class JobsResource {

	
	@Autowired
	private technicianJpaRepository technicianService;
	@Autowired
	private jobJpaRepository jobService;
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/users/{userType}/allJobsUnderCustomer/{user_id}")
	public List<Jobs> getAllJobs(@PathVariable String userType,@PathVariable Long user_id){
		return jobService.findAllByCustomerId(user_id);
		//return ( jobService.findAll());
		}
	
	@GetMapping("/users/{userType}/allJobsByLocality/{locality}")
	public List<Jobs> getAllJobsByLocality(@PathVariable String userType,@PathVariable String locality){
		return jobService.findByLocality(locality);
		//return ( jobService.findAll());
		}
//	
//	@GetMapping("/users/{userType}/allJobsUnderCustomer/{customer_id}")
//	public List<Jobs> getAllJobsByCustomer(@PathVariable String userType,@PathVariable Long customer_id){
//		return jobService.findAllByCurrentUser(customer_id);
//		//return ( jobService.findAll());
//		}
	
	@GetMapping("/users/{userType}/allJobsUnderTechnician/{technician_id}")
	public List<Jobs> getAllJobsByTechnicians(@PathVariable String userType,@PathVariable Long technician_id){
		return jobService.findAllByCurrentTechnician(technician_id);
		//return ( jobService.findAll());
		}
	 
	
	@GetMapping("/users/{userType}/Job/{id}")
	public Jobs getJob(@PathVariable String userType,@PathVariable long id){
		System.out.println("found");
		return ( jobService.findById(id).get());
		}
	
	@DeleteMapping("/users/{userType}/deleteJob/{id}")
	public ResponseEntity<Void> deleteJobs(@PathVariable String userType,@PathVariable long id)
	{
		 jobService.deleteById(id);
		
			return ResponseEntity.noContent().build();
	
	
	}
	
	//Edit/Update a Todo
	
	  @PutMapping("/addDetails")
	  public ResponseEntity<Jobs> details(@RequestBody Jobs job)
	  {
	      Technicians technician =jobService.findById(job.getId()).get().getTechnicians();
	      User user=jobService.findById(job.getId()).get().getUser();
	  	List<Jobs> listOfJobOfTechnician=technician.getJobs();
		if(listOfJobOfTechnician==null)
			listOfJobOfTechnician=new ArrayList<>();
		job.setTechnicians(technician);
		
		    List<Jobs> listOfJobs=user.getJobs();
		    if(listOfJobs==null)
				listOfJobs=new ArrayList<>();
			job.setUser(user);
		Jobs jobUpdated = jobService.save(job);
		user.setJobs(listOfJobs);
		technician.setJobs(listOfJobOfTechnician);
		return new ResponseEntity<Jobs>(job, HttpStatus.OK);
	  }
	  
	
		@PutMapping("/users/{userType}/{user_id}/updateJob/{id}/{technician_id}")
		public ResponseEntity<Jobs> updateTodo(
				@PathVariable String userType,@PathVariable Long user_id,
				@PathVariable long id, @RequestBody Jobs job,@PathVariable Long technician_id){
			Technicians technician=technicianService.findById(technician_id).get();
			List<Jobs> listOfJobOfTechnician=technician.getJobs();
			if(listOfJobOfTechnician==null)
				listOfJobOfTechnician=new ArrayList<>();
			job.setTechnicians(technician);
			// User user=userService.findById(user_id);
			
			User user=userService.findById(jobService.findById(id).get().getUser().getUser_id());
			    List<Jobs> listOfJobs=user.getJobs();
			    if(listOfJobs==null)
					listOfJobs=new ArrayList<>();
				job.setUser(user);
			Jobs jobUpdated = jobService.save(job);
			
			user.setJobs(listOfJobs);
			listOfJobOfTechnician.add(jobUpdated);
			technician.setJobs(listOfJobOfTechnician);
			return new ResponseEntity<Jobs>(job, HttpStatus.OK);
		}
		
		
		
		
		@PostMapping("/users/newJob/{user_id}")
		public ResponseEntity<Void> createJob(
				 @RequestBody Jobs job,@PathVariable Long user_id){
		
		

						Technicians technician=technicianService.findById(1L).get();
			List<Jobs> listOfJobOfTechnician=technician.getJobs();
			if(listOfJobOfTechnician==null)
				listOfJobOfTechnician=new ArrayList<>();
			job.setTechnicians(technician);
			
			
			 
		
			
			User user=userService.findById(user_id);
		
			List<Jobs> listOfJob=user.getJobs();
			
			if(listOfJob==null)
				listOfJob=new ArrayList<>();
			job.setUser(user);
			Jobs createdJob = jobService.save(job);
			listOfJob.add(createdJob);
			
			
           user.setJobs(listOfJob);			
//           technician.setJobs(listOfJobOfTechnician);	
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}").buildAndExpand(createdJob.getId()).toUri();
			
			return ResponseEntity.created(uri).build();
		}
		
		

}
