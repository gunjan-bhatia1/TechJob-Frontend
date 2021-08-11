package com.gunjan.TechJob.login;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gunjan.TechJob.Job.Jobs;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class LoginController {
	
	@Autowired
	UserService userService;
	UserDao dao;
	
//	To register the user
	@RequestMapping(value="/user/signUp",method = RequestMethod.POST)
	public User signUp(@RequestBody User user) {
		userService.create(user);
		System.out.println(user.getLocality());
		
		System.out.println("created");
		return user;
	}
	
	//for jobs of particular user
	
	
//	For login
	@RequestMapping(value = "/user/login", method = RequestMethod.POST)
	public User login(@RequestBody User loginUser) {
	
		User user2 = userService.findByEmail(loginUser.getEmail());
		
		//System.out.println(loginUser.getEmail());
		if (user2 == null) {
			System.out.println("hi");
			return null;
		}
		
		String s1 = user2.getPassword();
		String s2 = loginUser.getPassword();
		if (!s1.equals(s2)) {
	
			System.out.println("not matching");
			return null;
		}
		else
			System.out.println("id is "+user2.getUser_id());
		
		return user2;
	}
}