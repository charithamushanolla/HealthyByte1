package com.ts.dao;

import java.util.List;

import org.hibernate.SessionFactory;

import com.rest.dto.Client;
import com.rest.dto.DietPlan;
import com.ts.db.HibernateTemplate;

public class DietPlanDAO {
private SessionFactory factory = null;
	
    public int addDiet(DietPlan dietplan) {
		return HibernateTemplate.addObject(dietplan);
	}
    public DietPlan getDiet(int id) {
		return (DietPlan)HibernateTemplate.getObject(DietPlan.class,id);
	}
    public int editDiet(DietPlan dietPlan) {
		return HibernateTemplate.updateObject(dietPlan);
	}
    public int deleteDiet(int id) {
    	return HibernateTemplate.deleteObject(DietPlan.class,id);
	}
    public List<DietPlan> getAllDietPlans() {
		List<DietPlan> dietPlans=(List)HibernateTemplate.getObjectListByQuery("From DietPlan");
		System.out.println("Inside All Clients ..."+dietPlans);
		return dietPlans;	
	}

}
