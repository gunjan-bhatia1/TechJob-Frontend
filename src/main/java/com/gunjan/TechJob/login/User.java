package com.gunjan.TechJob.login;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gunjan.TechJob.Job.Jobs;
import com.gunjan.TechJob.Technician.Technicians;

@Entity
@Table(name = "User_Information")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long user_id;

	@Column(name = "userType")
	private String userType;

	@Column(name = "userName")
	private String userName;

	@Column(name = "email", unique = true)
	private String email;

	@Column(name = "password")
	private String password;
	
	@Column(name = "locality")
	private String locality;
	
	@JsonIgnore
	@OneToMany(mappedBy = "user")
	private List<Jobs> jobs;

	@JsonIgnore
	@OneToMany(mappedBy = "user")
	private List<Technicians> Technicians;

	public List<Technicians> getTechnicians() {
		return Technicians;
	}

	public void setTechnicians(List<Technicians> technicians) {
		Technicians = technicians;
	}

	public List<Jobs> getJobs() {
		return jobs;
	}

	public void setJobs(List<Jobs> listOfJob) {
		this.jobs = listOfJob;
	}

	public long getUser_id() {
		return user_id;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;

	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getEmail() {
		// TODO Auto-generated method stub
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public synchronized String getUserName() {
		return userName;
	}

	public synchronized void setUserName(String userName) {
		this.userName = userName;
	}

	
	public void setLocality(String locality) {
		this.locality = locality;
	}

	public String getLocality() {
		// TODO Auto-generated method stub
		return locality;
	}

}

//https://medium.com/@rameez.s.shaikh/upload-and-retrieve-images-using-spring-boot-angular-8-mysql-18c166f7bc98
//https://stackoverflow.com/questions/54927403/showing-jasper-report-from-spring-boot-app-in-angular-app