package com.gunjan.TechJob.login;

import java.util.List;
import java.util.Optional;

import com.gunjan.TechJob.Job.Jobs;

public interface UserService {
	
	public void create(User user);
	
	public User findByEmail(String email);


	public User findById(Long user_id);

	//public List<Jobs> getAllJobs();
	
	//public void updatePassword(String password,String email);
	

}