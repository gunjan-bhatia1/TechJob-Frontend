package com.gunjan.TechJob.Technician;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.gunjan.TechJob.Job.jobJpaRepository;
import com.gunjan.TechJob.login.User;
import com.gunjan.TechJob.login.UserService;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TechniciansResource {


	@Autowired
	private technicianJpaRepository technicianService;
	
	@Autowired
	private UserService userService;
	
	
	@Autowired
    private jobJpaRepository jobService;

    
	@RequestMapping(value = "/technician/login", method = RequestMethod.POST)
	public Technicians login(@RequestBody Technicians loginUser) {
	
		Technicians user2 = technicianService.findByEmail(loginUser.getEmail());
	  
		System.out.println(loginUser.getEmail());
		if (user2 == null) {
			System.out.println("nay");
			return null;
		}
		
		String s1 = user2.getPassword();
		String s2 = loginUser.getPassword();
		if (!s1.equals(s2)) {
	
			System.out.println("not matching");
			return null;
		}
		else
			System.out.println("id is "+user2.getTechnician_id());
		
		return user2;
	}
	
	@GetMapping("/users/{userType}/allTechnicians/{user_id}")
	public List<Technicians> getAllTechnicians(@PathVariable String userType,@PathVariable Long user_id){
				System.out.println(user_id);
		List<Technicians> tech=new ArrayList<>();
		System.out.println(tech.size());
		
				tech=technicianService.findAllByCurrentUser(user_id);
		return tech;
		
		}
	
	@GetMapping("/users/{userType}/allTechniciansByLocality/{locality}")
	public List<Technicians> getAllTechniciansByLocality(@PathVariable String userType,@PathVariable String locality){
				System.out.println(locality);
		List<Technicians> tech=new ArrayList<>();
		System.out.println(tech.size());
		
				tech=technicianService.findAllByLocality(locality);
		return tech;
		
		}
	 
	
	@GetMapping("/users/{userType}/Technician/{technician_id}")
	public Technicians getTechnician(@PathVariable String userType,@PathVariable long technician_id){
		
		return ( technicianService.findById(technician_id).get());
		}
	
	@DeleteMapping("/users/{userType}/deleteTechnician/{technician_id}")
	public ResponseEntity<Void> deleteTechnicians(@PathVariable String userType,@PathVariable long technician_id)
	{
		 technicianService.deleteById(technician_id);
		
			return ResponseEntity.noContent().build();
	
	
	}
	
	//Edit/Update a Todo
		
		@PutMapping("/users/{userType}/{user_id}/updateTechnician/{technician_id}")
		public ResponseEntity<Technicians> updateTodo(
				@PathVariable String userType,@PathVariable Long user_id,
				@PathVariable long technician_id, @RequestBody Technicians Technician){
            User user=userService.findById(user_id);
		    List<Technicians> listOfTechnician=user.getTechnicians();
		    if(listOfTechnician==null)
				listOfTechnician=new ArrayList<>();
			Technician.setUser(user);
			Technicians TechnicianUpdated = technicianService.save(Technician);
			user.setTechnicians(listOfTechnician);	
			return new ResponseEntity<Technicians>(Technician, HttpStatus.OK);
		}
		
		@PostMapping("/users/newTechnician/{user_id}")
		public ResponseEntity<Void> createTechnician( @PathVariable Long user_id,
				@RequestBody Technicians Technician){
	       
		
			User user=userService.findById(user_id);
			List<Technicians> listOfTechnician=user.getTechnicians();
		
			if(listOfTechnician==null)
				listOfTechnician=new ArrayList<>();
			Technician.setUser(user);
			Technicians createdTechnician = technicianService.save(Technician);
			listOfTechnician.add(createdTechnician);
			
			System.out.println(createdTechnician.getDepartment());
			System.out.println(createdTechnician.getContactInfo());
			
           user.setTechnicians(listOfTechnician);			
			
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}").buildAndExpand(createdTechnician.getId()).toUri();
			
			return ResponseEntity.created(uri).build();
		}
		
		@GetMapping("/{department}/technicians")
		  public ResponseEntity<List<Technicians>> findByPublished(@PathVariable String department) {
		    try {
		      List<Technicians> technicians = technicianService.findByDepartmentContains(department);

		      if (technicians.size()==0) {
		        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		      }
		      return new ResponseEntity<>(technicians, HttpStatus.OK);
		    } catch (Exception e) {
		      return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		    }
		  }
		

		@GetMapping("/data/{ID}")
		public List<Object[]> generateReport(@PathVariable Long ID) {

			List<Object[]> data=new ArrayList<>();
	
			Object[] obj=new Object[2];
		
			obj[0]="Task";
			obj[1]="status";
			data.add(obj);
			List<Object[]> data2=(jobService.findBystatusAndstatusCount(ID));
			for(int i=0;i<data2.size();i++)
			{
				data.add(data2.get(i));
			}
			for(Object[] objects : data) {
				{
					for(int i=0;i<objects.length;i++)
					{
						System.out.println("hi"+objects[0]);
					if(objects[0].toString()=="true")
						 objects[0]="Completed";
					else if(objects[0].toString()=="false")
						objects[0]="Not Completed";
						 
					}
				}
			}
			//System.out.println("hi how are you");
			return data;
		//return "report";	
	}

}
