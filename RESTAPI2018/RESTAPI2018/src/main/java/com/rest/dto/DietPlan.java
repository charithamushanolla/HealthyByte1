package com.rest.dto;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
public class DietPlan {
	@Id@GeneratedValue
	private int dietId;
	private String image;
	private String morningDiet;
	private String afternoonDiet;
	private String eveningDiet;
	private String phyActivities;
	
	@ManyToMany
	private Collection<HealthForm> healthForm = new ArrayList<HealthForm>();
	
	public Collection<HealthForm> getHealthForm() {
		return healthForm;
	}
	public void setHealthForm(Collection<HealthForm> healthForm) {
		this.healthForm = healthForm;
	}
	
	public DietPlan() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getDietId() {
		return dietId;
	}
	public void setDietId(int dietId) {
		this.dietId = dietId;
	}
	public String getMorningDiet() {
		return morningDiet;
	}
	public void setMorningDiet(String morningDiet) {
		this.morningDiet = morningDiet;
	}
	public String getAfternoonDiet() {
		return afternoonDiet;
	}
	public void setAfternoonDiet(String afternoonDiet) {
		this.afternoonDiet = afternoonDiet;
	}
	public String getEveningDiet() {
		return eveningDiet;
	}
	public void setEveningDiet(String eveningDiet) {
		this.eveningDiet = eveningDiet;
	}
	public String getPhyActivities() {
		return phyActivities;
	}
	public void setPhyActivities(String phyActivities) {
		this.phyActivities = phyActivities;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	@Override
	public String toString() {
		return "DietPlan [dietId=" + dietId + ", image=" + image + ", morningDiet=" + morningDiet + ", afternoonDiet="
				+ afternoonDiet + ", eveningDiet=" + eveningDiet + ", phyActivities=" + phyActivities + ", healthForm="
				+ healthForm + "]";
	}
	
	
}
