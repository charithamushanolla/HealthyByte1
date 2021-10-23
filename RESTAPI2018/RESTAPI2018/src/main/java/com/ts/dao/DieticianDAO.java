package com.ts.dao;

import java.util.List;

import org.hibernate.SessionFactory;

import com.rest.dto.Client;
import com.rest.dto.Dietician;
import com.ts.db.HibernateTemplate;

public class DieticianDAO {
	private SessionFactory factory = null;
	
	public Dietician getDieticianByUserPass(String loginId,String password) {

		return (Dietician)HibernateTemplate.getObjectByUserPass1(loginId,password);
	}
	public int register(Dietician dietician) {
		return HibernateTemplate.addObject(dietician);
	}
	public Dietician getDietician(int id) {
		return (Dietician)HibernateTemplate.getObject(Dietician.class,id);
	}
	public int editDietician(Dietician dietician) {
		return HibernateTemplate.updateObject(dietician);
	}
    public int deleteDietician(int id) {
    	return HibernateTemplate.deleteObject(Dietician.class,id);
	}
    public List<Dietician> getAllDietician() {
		List<Dietician> dieticians=(List)HibernateTemplate.getObjectListByQuery("From Dietician");
		System.out.println("Inside All dieticians ..."+dieticians);
		return dieticians;	
	}
}
