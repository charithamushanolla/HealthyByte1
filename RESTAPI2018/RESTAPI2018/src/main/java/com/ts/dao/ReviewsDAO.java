package com.ts.dao;

import java.util.List;

import org.hibernate.SessionFactory;

import com.rest.dto.DietPlan;
import com.rest.dto.Reviews;
import com.ts.db.HibernateTemplate;

public class ReviewsDAO {
private SessionFactory factory = null;
	
    public int addReview(Reviews review) {
		return HibernateTemplate.addObject(review);
	}
    public ReviewsDAO getReview(int id) {
		return (ReviewsDAO)HibernateTemplate.getObject(ReviewsDAO.class,id);
	}
    public int editReview(ReviewsDAO review) {
		return HibernateTemplate.updateObject(review);
	}
    public int deleteReview(int id) {
    	return HibernateTemplate.deleteObject(ReviewsDAO.class,id);
	}
    public List<Reviews> getAllReviews() {
		List<Reviews> reviews=(List)HibernateTemplate.getObjectListByQuery("From Reviews");
		System.out.println("Inside All Clients ..."+reviews);
		return reviews;	
	}

}
