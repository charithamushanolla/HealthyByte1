package com.rest.dto;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.xml.bind.annotation.XmlRootElement; 

@XmlRootElement
@Entity
public class HealthForm {
	@Id@GeneratedValue
	private int healthFormId;
	private int age;
	private double weight;
	private double height;
	private String gender;
	private String bloodGrp;
	private String medicalCondition;
	private String dailyActivity;
	private double bmi;
	
	
	@OneToOne
	@JoinColumn(name="clientId")
	private Client client;
	
	@ManyToMany(mappedBy = "healthForm")
	private Collection<DietPlan> dietPlan = new ArrayList<DietPlan>();
	
	public Client getClient() {
		return client;
	}
	public void setClient(Client client) {
		this.client = client;
	}
	
	public Collection<DietPlan> getDietPlan() {
		return dietPlan;
	}
	public void setDietPlan(Collection<DietPlan> dietPlan) {
		this.dietPlan = dietPlan;
	}
	
	public int getHealthFormId() {
		return healthFormId;
	}
	public void setHealthFormId(int healthFormId) {
		this.healthFormId = healthFormId;
	}
	public double getBmi() {
		return bmi;
	}
	public void setBmi(double bmi) {
		this.bmi = bmi;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public double getWeight() {
		return weight;
	}
	public void setWeight(double weight) {
		this.weight = weight;
	}
	public double getHeight() {
		return height;
	}
	public void setHeight(double height) {
		this.height = height;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getBloodGrp() {
		return bloodGrp;
	}
	public void setBloodGrp(String bloodGrp) {
		this.bloodGrp = bloodGrp;
	}
	public String getMedicalCondition() {
		return medicalCondition;
	}
	public void setMedicalCondition(String medicalCondition) {
		this.medicalCondition = medicalCondition;
	}
	public String getDailyActivity() {
		return dailyActivity;
	}
	public void setDailyActivity(String dailyActivity) {
		this.dailyActivity = dailyActivity;
	}
	public HealthForm() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "HealthForm [healthFormId=" + healthFormId + ", age=" + age + ", weight=" + weight + ", height=" + height
				+ ", gender=" + gender + ", bloodGrp=" + bloodGrp + ", medicalCondition=" + medicalCondition
				+ ", dailyActivity=" + dailyActivity + ", bmi=" + bmi + "]";
	}
	
	
	
}
