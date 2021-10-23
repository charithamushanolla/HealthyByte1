package com.ts.db;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import com.rest.dto.Client;
import com.rest.dto.Dietician;

public class HibernateTemplate {

	private static SessionFactory sessionFactory;
	
	static {
		sessionFactory = new Configuration().configure().buildSessionFactory();
	}
	
	public static int addObject(Object obj){
		System.out.println("Inside Template...");
		int result=0;
		
		Transaction tx=null;
		
		try {
			
			Session session=sessionFactory.openSession();
			tx=session.beginTransaction();
			
			session.save(obj);
			
			tx.commit();
			
			result=1;
			
		} catch (Exception e) {
		
			tx.rollback();
			
			e.printStackTrace();
		}
		
		return result;
	}
	
	public static Object getObject(Class c,Serializable serializable)
	{
		Object obj=null;
		
		try {			
			return sessionFactory.openSession().get(c,serializable);
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
		return obj;
	}
	
	public static Object getObjectByUserPass(String loginId,String password) {
	
	String queryString = "from Client where loginId = :loginId and password =:password";
	  Query query = sessionFactory.openSession().createQuery(queryString);
	  query.setString("loginId", loginId);
	  query.setString("password", password);
	  Object queryResult = query.uniqueResult();
	  Client client = (Client)queryResult;
	  return client; 
	}
	public static Object getObjectByUserPass1(String loginId,String password) {
		
		String queryString = "from Dietician where loginId = :loginId and password =:password";
		  Query query = sessionFactory.openSession().createQuery(queryString);
		  query.setString("loginId", loginId);
		  query.setString("password", password);
		  Object queryResult = query.uniqueResult();
		  Dietician dietician = (Dietician)queryResult;
		  return dietician; 
		}
	public static Object getObjectByEmail(String emailId) {
		
		String queryString = "from Client where emailId = :emailId";
		  Query query = sessionFactory.openSession().createQuery(queryString);
		  query.setString("emailId", emailId);
		  Object queryResult = query.uniqueResult();
		  Client client = (Client)queryResult;
		  return client;
		}
	public static List<Object> getObjectListByQuery(String query)
	{
		return sessionFactory.openSession().createQuery(query).list();
	}
	
	public static int updateObject(Object obj)
	{
		int result=0;
		
		Transaction tx=null;
		
		try {
			
			Session session=sessionFactory.openSession();
			tx=session.beginTransaction();
			
			session.saveOrUpdate(obj);
			
			tx.commit();
			
			result=1;
			
		} catch (Exception e) {
		
			tx.rollback();
			
			e.printStackTrace();
		}
		
		return result;
	}
	
	public static int deleteObject(Class c,Serializable serializable)
	{
		int result=0;
		
		Session session=sessionFactory.openSession();
		
		Transaction tx=session.beginTransaction();
		
		try {
			
			Object obj=session.get(c,serializable);
			
			session.delete(obj);
			
			tx.commit();
			
			result=1;
						
		} catch (Exception e) {
			
			e.printStackTrace();
			
			tx.rollback();
		}
		
		return result;
	}

	public static List<Object> getObjectListByName(Class c, String columName, String value) {
		Session session=sessionFactory.openSession();
		  Criteria criteria = session.createCriteria(c);
			Criterion nameCriterion = Restrictions.eq(columName, value);
			criteria.add(nameCriterion);
			return criteria.list();
	}
	public static List<String> getAllLoginIds(){
		String queryString1 = "select loginId from Client";
		Query query1 = sessionFactory.openSession().createQuery(queryString1);
		List<String> loginIds = new ArrayList<String>();
		loginIds = query1.list();
		return loginIds;
	}
}
