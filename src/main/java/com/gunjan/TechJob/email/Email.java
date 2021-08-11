package com.gunjan.TechJob.email;

public class Email {

	public String recieverId;
	public String senderId;
	public String subject;
	public String info;
	public String getRecieverId() {
		// TODO Auto-generated method stub
		return recieverId;
	}
	public void setRecieverId(String recieverId) {
		this.recieverId = recieverId;
	}
	public String getSenderId() {
		return senderId;
	}
	public void setSenderId(String senderId) {
		this.senderId = senderId;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	public Email(String recieverId, String senderId, String subject, String info) {
		super();
		this.recieverId = recieverId;
		this.senderId = senderId;
		this.subject = subject;
		this.info = info;
	}
	
	

	
	
}
