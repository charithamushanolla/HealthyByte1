package com.rest.dto;


import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
public class Client {
	@Id@GeneratedValue
	private int clientId;
	private String clientName;
	private java.util.Date dob;
	private String phoneNo;
	private String emailId;
	private String loginId;
	private String password;
	private String confirmpassword;
	private String nationality;
	
	@ManyToOne
	@JoinColumn(name="dieticianId")
	private Dietician dietician;
	

	@OneToOne
	@JoinColumn(name="healthFormId")
	private HealthForm healthForm;
	
	@OneToOne(mappedBy="client")
	private Reviews reviews;
	
	@OneToMany(mappedBy="client")
	private Collection<Discussion> discussions = new ArrayList<Discussion>();
	public Date getDob() {
		return dob;
	}


	public String getConfirmpassword() {
		return confirmpassword;
	}


	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}


	public Collection<Discussion> getDiscussions() {
		return discussions;
	}


	public void setDiscussions(Collection<Discussion> discussions) {
		this.discussions = discussions;
	}


	public void setDob(Date dob) {
		this.dob = dob;
	}


	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Client(int clientId, String clientName, String phoneNo, String emailId, String loginId, String password,
			String nationality, Dietician dietician, HealthForm healthForm, Reviews reviews) {
		super();
		this.clientId = clientId;
		this.clientName = clientName;
		this.phoneNo = phoneNo;
		this.emailId = emailId;
		this.loginId = loginId;
		this.password = password;
		this.nationality = nationality;
		this.dietician = dietician;
		this.healthForm = healthForm;
		this.reviews = reviews;
	}


	public int getClientId() {
		return clientId;
	}


	public void setClientId(int clientId) {
		this.clientId = clientId;
	}


	public String getClientName() {
		return clientName;
	}


	public void setClientName(String clientName) {
		this.clientName = clientName;
	}


	public String getPhoneNo() {
		return phoneNo;
	}


	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}


	public String getEmailId() {
		return emailId;
	}


	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}


	public String getLoginId() {
		return loginId;
	}


	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getNationality() {
		return nationality;
	}


	public void setNationality(String nationality) {
		this.nationality = nationality;
	}


	public Dietician getDietician() {
		return dietician;
	}


	public void setDietician(Dietician dietician) {
		this.dietician = dietician;
	}


	public HealthForm getHealthForm() {
		return healthForm;
	}


	public void setHealthForm(HealthForm healthForm) {
		this.healthForm = healthForm;
	}


	public Reviews getReviews() {
		return reviews;
	}


	public void setReviews(Reviews reviews) {
		this.reviews = reviews;
	}


	


}
