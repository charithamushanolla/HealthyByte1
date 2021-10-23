package com.ts.dao;

import java.util.List;

import org.hibernate.SessionFactory;

import com.rest.dto.Client;
import com.rest.dto.HealthForm;
import com.ts.db.HibernateTemplate;

public class HealthFormDAO {
	private SessionFactory factory = null;
	
    public int healthFormDetails(HealthForm healthForm) {
		return HibernateTemplate.addObject(healthForm);
	}
    public HealthForm getHealthForm(int id) {
		return (HealthForm)HibernateTemplate.getObject(HealthForm .class,id);
	}
    public int editHealthForm(HealthForm healthForm) {
		return HibernateTemplate.updateObject(healthForm);
	}
    public int deleteHealthForm(int id) {
    	return HibernateTemplate.deleteObject(HealthForm.class,id);
	}
    public List<HealthForm> getAllHealthForms() {
		List<HealthForm> healthForms=(List)HibernateTemplate.getObjectListByQuery("From HealthForm");
		System.out.println("Inside All Clients ..."+healthForms);
		return healthForms;	
	}
}
