package com.gunjan.TechJob.Technician;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gunjan.TechJob.Job.Jobs;
import com.gunjan.TechJob.login.User;

@Entity
@Table(name="Technicians")
public class Technicians {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long technician_id;
	
	@Column(name="name")
	private String name;
	@Column(name = "email", unique=true)
	private String email;
	@Column(name = "password")
	private String password;
	
	@Column(name="contactInfo")
	private String contactInfo;
	@Column(name="jobAssigned")
	private String jobAssigned;
	@Column(name="performance")
	private String performance;
	@Column(name="department")
	private String department;

//	public Technicians(String name, String contactInfo, String jobAssigned, String performance, String department
//			) {
//		super();
//		this.name = name;
//		this.contactInfo = contactInfo;
//		this.jobAssigned = jobAssigned;
//		this.performance = performance;
//		this.department = department;
//		
//	}
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@JsonIgnore
	@OneToMany(mappedBy="technicians")
	private List<Jobs> jobs;
	protected Technicians() {
		
	}
	public List<Jobs> getJobs() {
		return jobs;
	}

	public void setJobs(List<Jobs> jobs) {
		this.jobs = jobs;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	

	public long getId() {
		return technician_id;
	}

	public void setId(long id) {
		this.technician_id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContactInfo() {
		return contactInfo;
	}

	public void setContactInfo(String contactInfo) {
		this.contactInfo = contactInfo;
	}

	public String getJobAssigned() {
		return jobAssigned;
	}

	public void setJobAssigned(String jobAssigned) {
		this.jobAssigned = jobAssigned;
	}

	public String getPerformance() {
		return performance;
	}

	public void setPerformance(String performance) {
		this.performance = performance;
	}
	
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getDepartment() {
		// TODO Auto-generated method stub
		return department;
	}
	
	public String getEmail() {
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
	
	public long getTechnician_id() {
		return technician_id;
	}
	public void setTechnician_id(long technician_id) {
		this.technician_id = technician_id;
	}
	
}
