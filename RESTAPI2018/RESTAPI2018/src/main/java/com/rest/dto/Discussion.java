package com.rest.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity

public class Discussion {
	@Id@GeneratedValue
	private int discussionId;
	private String question;
	private String answer;
	@ManyToOne
	@JoinColumn(name="clientId")
	private Client client;
	public Discussion() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getDiscussionId() {
		return discussionId;
	}
	public void setDiscussionId(int discussionId) {
		this.discussionId = discussionId;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public Client getClient() {
		return client;
	}
	public void setClient(Client client) {
		this.client = client;
	}
	@Override
	public String toString() {
		return "Discussion [discussionId=" + discussionId + ", question=" + question + ", answer=" + answer
				+ ", client=" + client + "]";
	}
	
}
