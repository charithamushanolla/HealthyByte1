package com.ts.dao;

import java.util.List;

import org.hibernate.SessionFactory;

import com.rest.dto.Client;
import com.rest.dto.Discussion;
import com.ts.db.HibernateTemplate;

public class DiscussionDAO {
private SessionFactory factory = null;
	
    public int addDiscussion(Discussion discussion) {
		return HibernateTemplate.addObject(discussion);
	}
    public List<Discussion> getAllDiscussions() {
		List<Discussion> discussions=(List)HibernateTemplate.getObjectListByQuery("From Discussion");
		System.out.println("Inside All Clients ..."+discussions);
		return discussions;	
	}
    public Discussion getDiscussion(int id) {
		return (Discussion)HibernateTemplate.getObject(Discussion.class,id);
	}
    public int editDiscussion(Discussion discussion) {
		return HibernateTemplate.updateObject(discussion);
	}
    public int deleteDiscussion(int id) {
    	return HibernateTemplate.deleteObject(Client.class,id);
	}
}
