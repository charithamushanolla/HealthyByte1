package com.ts.dao;

import java.util.List;

import org.hibernate.SessionFactory;

import com.rest.dto.Client;
import com.ts.db.HibernateTemplate;

public class ClientDAO {
	private SessionFactory factory = null;
	

    public Client getClientByUserPass(String loginId,String password) {

	      return (Client)HibernateTemplate.getObjectByUserPass(loginId,password);
    }
    public int register(Client client) {
		return HibernateTemplate.addObject(client);
	}
    public List<Client> getAllClients() {
		List<Client> clients=(List)HibernateTemplate.getObjectListByQuery("From Client");
		System.out.println("Inside All Clients ..."+clients);
		return clients;	
	}
    public Client getClient(int id) {
		return (Client)HibernateTemplate.getObject(Client.class,id);
	}
    public int editClient(Client client) {
		return HibernateTemplate.updateObject(client);
	}
    public int deleteClient(int id) {
    	return HibernateTemplate.deleteObject(Client.class,id);
	}
    

}