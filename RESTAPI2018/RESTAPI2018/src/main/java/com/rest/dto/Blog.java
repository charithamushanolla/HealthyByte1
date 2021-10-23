package com.rest.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
public class Blog {
	@Id@GeneratedValue
	private int blogId;
	private String image;
	private String article;
	@ManyToOne
	@JoinColumn(name="clientId")
	private Client client;
	public Blog() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getBlogId() {
		return blogId;
	}
	public void setBlogId(int blogId) {
		this.blogId = blogId;
	}
	public String getArticle() {
		return article;
	}
	public void setArticle(String article) {
		this.article = article;
	}
	public Client getClient() {
		return client;
	}
	public void setClient(Client client) {
		this.client = client;
	}
	@Override
	public String toString() {
		return "Blog [blogId=" + blogId + ", article=" + article + ", client=" + client + "]";
	}
	
}
