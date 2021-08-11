package com.gunjan.TechJob.Job;
//https://stackoverflow.com/questions/62422345/i-am-trying-to-show-shortest-path-using-angular-maps-by-using-google-map-apis-i
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gunjan.TechJob.Technician.Technicians;
import com.gunjan.TechJob.login.User;

@Entity
@Table(name = "job_details")
public class Jobs {
	//://developer.here.com/blog/transportation-routing-and-directions-in-an-angular-application-with-the-here-routing-api
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "job_name")
	private String jobName;
	@Column(name = "address")
	private String address;
	@Column(name = "issue")
	private String issue;
	@Column(name = "status")
	private Boolean status;
	@Column(name = "show_details")
	private String showDetails;
	@Column(name = "technician_details")
	private String technicianDetails;
	@Column(name = "username")
	private String username;
	@Column(name = "duration")
	private String duration;
	@Column(name = "image")
	private String image;
	@Column(name = "charges")
	private Integer charges;
	@Column(name = "partsRepaired")
	private String partsRepaired;
	@Column(name = "partsAdded")
	private String partsAdded;
	@Column(name = "warrentyIncreased")
	private String warrentyIncreased;
	@Column(name = "note")
	private String note;
	@Column(name="locality")
	private String locality;
	
	

	public Jobs( String jobName, String address, String issue, Boolean status, String showDetails,
			String technicianDetails, String username, String duration, String image, Integer charges, String partsRepaired,
			String partsAdded, String warrentyIncreased, String note, String locality, User user,
			Technicians technicians) {
		super();
		
		this.jobName = jobName;
		this.address = address;
		this.issue = issue;
		this.status = status;
		this.showDetails = showDetails;
		this.technicianDetails = technicianDetails;
		this.username = username;
		this.duration = duration;
		this.image = image;
		this.charges = charges;
		this.partsRepaired = partsRepaired;
		this.partsAdded = partsAdded;
		this.warrentyIncreased = warrentyIncreased;
		this.note = note;
		this.locality = locality;
		
	}

	public Jobs() {
		
	}
	
	

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "technician_id")
	private Technicians technicians;
	
	public Technicians getTechnicians() {
		return technicians;
	}

	public void setTechnicians(Technicians technician) {
		this.technicians=technician;
		
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getJobName() {
		return jobName;
	}

	public void setJobName(String jobName) {
		this.jobName = jobName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getIssue() {
		return issue;
	}

	public void setIssue(String issue) {
		this.issue = issue;
	}

	public Boolean isStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public String getShowDetails() {
		return showDetails;
	}

	public void setShowDetails(String showDetails) {
		this.showDetails = showDetails;
	}

	public String getTechnicianDetails() {
		return technicianDetails;
	}

	public void setTechnicianDetails(String technicianDetails) {
		this.technicianDetails = technicianDetails;
	}

	public String getUsername() {
		return username;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Integer getCharges() {
		return charges;
	}

	public void setCharges(Integer charges) {
		this.charges = charges;
	}

	public String getPartsRepaired() {
		return partsRepaired;
	}

	public void setPartsRepaired(String partsRepaired) {
		this.partsRepaired = partsRepaired;
	}

	public String getPartsAdded() {
		return partsAdded;
	}

	public void setPartsAdded(String partsAdded) {
		this.partsAdded = partsAdded;
	}

	public String getWarrentyIncreased() {
		return warrentyIncreased;
	}

	public void setWarrentyIncreased(String warrentyIncreased) {
		this.warrentyIncreased = warrentyIncreased;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getLocality() {
		return locality;
	}

	public void setLocality(String locality) {
		this.locality = locality;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Jobs other = (Jobs) obj;
		if (id != other.id)
			return false;
		return true;
	}

	

	

	

}
