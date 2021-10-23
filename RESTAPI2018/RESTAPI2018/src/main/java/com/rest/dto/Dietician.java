package com.rest.dto;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@XmlRootElement
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
property = "dieticianId")
@Entity
public class Dietician{
	@Id@GeneratedValue
	private int dieticianId;
	private String dieticianName;
	private String phoneNo;
	private String emailId;
	private String loginId;
	private String password;
	private String nationality;
	
	
	@OneToMany(mappedBy = "dietician")
	@Fetch(value = FetchMode.SUBSELECT)
	
	private Collection<Client> client = new ArrayList<Client>();
	
	@OneToMany(mappedBy = "dietician")
	private Collection<Reviews> reviews = new ArrayList<Reviews>();
	
	public Collection<Client> getClient() {
		return client;
	}
	public void setClient(Collection<Client> client) {
		this.client = client;
	}
	public Dietician() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getDieticianId() {
		return dieticianId;
	}
	public void setDieticianId(int dieticianId) {
		this.dieticianId = dieticianId;
	}
	public String getDieticianName() {
		return dieticianName;
	}
	public void setDieticianName(String dieticianName) {
		this.dieticianName = dieticianName;
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
	@Override
	public String toString() {
		return "Dietician [dieticianId=" + dieticianId + ", dieticianName=" + dieticianName + ", phoneNo=" + phoneNo
				+ ", emailId=" + emailId + ", loginId=" + loginId + ", password=" + password + ", nationality="
				+ nationality + "]";
	}
	
}
	