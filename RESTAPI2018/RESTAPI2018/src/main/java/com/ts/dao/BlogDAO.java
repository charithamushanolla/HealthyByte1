package com.ts.dao;

import java.util.List;

import org.hibernate.SessionFactory;

import com.rest.dto.Blog;
import com.rest.dto.Client;
import com.ts.db.HibernateTemplate;

public class BlogDAO {
	private SessionFactory factory = null;
	
	public int addBlog(Blog blog) {
		return HibernateTemplate.addObject(blog);
	}
	public List<Blog> getAllBlogs() {
		List<Blog> blogs=(List)HibernateTemplate.getObjectListByQuery("From Blog");
		System.out.println("Inside All blogs ..."+blogs);
		return blogs;	
	}
    public Blog getBlog(int id) {
		return (Blog)HibernateTemplate.getObject(Blog.class,id);
	}
    public int editBlog(Blog blog) {
		return HibernateTemplate.updateObject(blog);
	}
    public int deleteBlog(int id) {
    	return HibernateTemplate.deleteObject(Blog.class,id);
	}
    
}
