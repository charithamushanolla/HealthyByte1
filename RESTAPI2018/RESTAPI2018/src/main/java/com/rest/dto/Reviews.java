package com.rest.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
public class Reviews {
	@Id@GeneratedValue
	private int reviewId;
	private int rating;
	private String review;
	
	@OneToOne
	@JoinColumn(name="clientId")
	private Client client;
	
	@ManyToOne
	@JoinColumn(name="dieticianId")
	private Dietician dietician;
	
	public Dietician getDietician() {
		return dietician;
	}
	public void setDietician(Dietician dietician) {
		this.dietician = dietician;
	}
	public Client getClient() {
		return client;
	}
	public void setClient(Client client) {
		this.client = client;
	}
	
	public Reviews() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getReviewId() {
		return reviewId;
	}
	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	@Override
	public String toString() {
		return "Reviews [reviewId=" + reviewId + ", rating=" + rating + ", review=" + review + "]";
	}
}
