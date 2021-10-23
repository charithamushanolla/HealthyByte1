package com.rest;

	import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import com.rest.dto.Blog;
import com.rest.dto.Client;
import com.rest.dto.DietPlan;
import com.rest.dto.Dietician;
import com.rest.dto.Discussion;
import com.rest.dto.EmailSending;
import com.rest.dto.HealthForm;
import com.rest.dto.Reviews;
import com.ts.dao.BlogDAO;
import com.ts.dao.ClientDAO;
import com.ts.dao.DietPlanDAO;
import com.ts.dao.DieticianDAO;
import com.ts.dao.DiscussionDAO;
import com.ts.dao.HealthFormDAO;
import com.ts.dao.ReviewsDAO;
import com.ts.db.HibernateTemplate;


@Path("myresource")
public class MyResource {

   
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getIt() {
        return "Got it!";
    }
    
    @Path("registerClient")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
	public void registerClient(Client client) {
		System.out.println("Data Recieved in Register : " + client); 
		//int x=EmployeeDao.addRecord(employee);
		ClientDAO clientDAO = new ClientDAO();
		client.setDietician(new DieticianDAO().getDietician(1));
		clientDAO.register(client);
		EmailSending emailSending = new EmailSending();
		emailSending.sendEmail(client);
		//client.setDietician(new DieticianDAO().getDietician(1));
		//Dietician dietician = new Dietician();
		//client.setDietician(dietician);
		
		
	}
    @Path("registerDietician")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String registerDietician(){
    	System.out.println("hii");
    	Dietician dietician = new Dietician();
    	dietician.setDieticianId(1);
    	dietician.setDieticianName("Akshitha");
    	dietician.setPhoneNo("9876543210");
    	dietician.setEmailId("akshih123@gmail.com");
    	dietician.setLoginId("admin");
    	dietician.setPassword("admin");
    	dietician.setNationality("India");
    	
    	DieticianDAO dieticianDAO = new DieticianDAO();
    	dieticianDAO.register(dietician);
    	
    	return "Success";
    	
    }
    @Path("getAllDieticians")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Dietician> getDieticianAll(){
		/*List<Employee> empList = EmployeeDao.getAllEmployees();
		   return empList;*/
		System.out.println("Recieved in getAllDieticians : " ); 
		DieticianDAO dieticianDAO = new DieticianDAO();
		List<Dietician> dieticianList = dieticianDAO.getAllDietician();	
		return dieticianList;	
	}
    @Path("loginDietician/{loginId}/{password}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Dietician loginDietician(@PathParam("loginId")String loginId,@PathParam("password")String password){
    	System.out.println("Data recieved in login Dietician"+loginId+" "+password);
    	DieticianDAO dieticianDAO = new DieticianDAO();
    	Dietician dietician = dieticianDAO.getDieticianByUserPass(loginId, password);
		return dietician;
    }
    
    @Path("loginClient/{loginId}/{password}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Client loginClient(@PathParam("loginId")String loginId,@PathParam("password")String password){
    	System.out.println("Data recieved in login "+loginId+" "+password);
    	ClientDAO clientDAO = new ClientDAO();
    	Client client = clientDAO.getClientByUserPass(loginId, password);
		return client;
    }
    @Path("submitHealthForm")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
	public void submitHealthForm(HealthForm healthForm) {
		System.out.println("Data Recieved in HealthForm : " + healthForm); 
		HealthFormDAO healthFormDAO = new HealthFormDAO();
		healthForm.getClient();
		healthFormDAO.healthFormDetails(healthForm);
		//client.setDietician(new DieticianDAO().getDietician(1));
		//Dietician dietician = new Dietician();
		//client.setDietician(dietician);
		
		
	}
    @Path("updateClient")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void updateClient(Client client){
		System.out.println("Data Recieved in update : " + client); 
		ClientDAO clientDAO = new ClientDAO();
		clientDAO.editClient(client);
	}
    @Path("updateDietician")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void updateDietician(Dietician dietician){
		System.out.println("Data Recieved in update dietician: " + dietician); 
		DieticianDAO dieticianDAO = new DieticianDAO();
		dieticianDAO.editDietician(dietician);
	}
    @Path("updateHealthForm")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void updateHealthForm(HealthForm healthForm){
		System.out.println("Data Recieved in update : " + healthForm); 
		HealthFormDAO healthFormDAO = new HealthFormDAO();
		healthFormDAO.editHealthForm(healthForm);
	}
    
    @Path("/uploadImage")
    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public void uploadImage(@FormDataParam("Image")InputStream fileInputStream,@FormDataParam("Image") FormDataContentDisposition formDataContentDisposition,
    		@FormDataParam("morningDiet")String morningDiet,
    		@FormDataParam("afternoonDiet")String afternoonDiet,
    		@FormDataParam("eveningDiet")String eveningDiet,
    		@FormDataParam("phyActivities")String phyActivities){
    	int read = 0;
    	byte[] bytes = new byte[1024];
    	String path = this.getClass().getClassLoader().getResource("").getPath();
    	String pathArr[] = path.split("/WEB-INF/classes/");
    	FileOutputStream out;
    	try{
    		out = new FileOutputStream(new File(pathArr[0]+"/image/",formDataContentDisposition.getFileName()));
    		while((read=fileInputStream.read(bytes))!=-1){
    			out.write(bytes,0,read);
    		}
    		out.flush();
    		out.close();
    	}catch(IOException e){
    		e.printStackTrace();
    	}
    	
    	 DietPlan dietPlan = new DietPlan();
    	 dietPlan.setMorningDiet(morningDiet);
    	 dietPlan.setAfternoonDiet(afternoonDiet);
    	 dietPlan.setEveningDiet(eveningDiet);
    	 dietPlan.setPhyActivities(phyActivities);
    	 dietPlan.setImage(formDataContentDisposition.getFileName());
    	 DietPlanDAO dietplanDAO = new DietPlanDAO();
    	 dietplanDAO.addDiet(dietPlan);
    	 System.out.println(dietPlan);
    }
    @Path("getAllDietPlans")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<DietPlan> getDietPlansAll(){
		/*List<Employee> empList = EmployeeDao.getAllEmployees();
		   return empList;*/
		System.out.println("Recieved in getAllDietPlans : " ); 
		DietPlanDAO dietPlanDAO = new DietPlanDAO();
		List<DietPlan> dietPlanList = dietPlanDAO.getAllDietPlans();	
		return dietPlanList;	
	}
    @Path("getAllclients")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Client> getClientsAll(){
		/*List<Employee> empList = EmployeeDao.getAllEmployees();
		   return empList;*/
		System.out.println("Recieved in getAllClients: " ); 
		ClientDAO clientDAO = new ClientDAO();
		List<Client> clientList = clientDAO.getAllClients();
		return clientList;
		
	}
    @Path("getAllHealthForms")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<HealthForm> getHealthFormsAll(){
		/*List<Employee> empList = EmployeeDao.getAllEmployees();
		   return empList;*/
		System.out.println("Recieved in getAllHealthForms: " ); 
		HealthFormDAO healthFormDAO = new HealthFormDAO();
		List<HealthForm> healthFormList = healthFormDAO.getAllHealthForms();
		return healthFormList;
		
	}
    @Path("getDietById/{dietPlanId}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public DietPlan getDietPlanById(@PathParam("dietPlanId") int dietPlanId){
    	System.out.println("Recieved in getDietPlanByID : " + dietPlanId); 
    	DietPlanDAO dietPlanDAO = new DietPlanDAO();
    	DietPlan dietPlan = dietPlanDAO.getDiet(dietPlanId);
    	return dietPlan;
    }
    @Path("addReview")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
	public void submitReview(Reviews reviews) {
		System.out.println("Data Recieved in Reviews : " + reviews); 
		ReviewsDAO reviewsDAO = new ReviewsDAO();
		reviews.getClient();
		reviews.setDietician(new DieticianDAO().getDietician(1));
		reviewsDAO.addReview(reviews);
		
		
	}
    @Path("getAllReviews")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Reviews> getReviewsAll(){
		/*List<Employee> empList = EmployeeDao.getAllEmployees();
		   return empList;*/
		System.out.println("Recieved in getAllReviews: " ); 
		ReviewsDAO reviewsDAO = new ReviewsDAO();
		List<Reviews> reviewsList = reviewsDAO.getAllReviews();
		return reviewsList;
		
	}
    @Path("addBlog")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
	public void submitBlog(Blog blog) {
		System.out.println("Data Recieved in blog : " + blog); 
		BlogDAO blogDAO = new BlogDAO();
		blog.getClient();
		//reviews.setDietician(new DieticianDAO().getDietician(1));
		blogDAO.addBlog(blog);
		
		
	}
    @Path("updateBlog")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void updateBlog(Blog blog){
		System.out.println("Data Recieved in update : " + blog); 
		BlogDAO blogDAO = new BlogDAO();
		blogDAO.editBlog(blog);
	}
    @Path("getAllBlogs")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Blog> getBlogsAll(){
		/*List<Employee> empList = EmployeeDao.getAllEmployees();
		   return empList;*/
		System.out.println("Recieved in getAllBlog: " ); 
		BlogDAO blogDAO = new BlogDAO();
		List<Blog> blogList = blogDAO.getAllBlogs();
		return blogList;
		
	}
//    @Path("deleteBlog/{blogId}")
//	@DELETE
//	@Produces(MediaType.APPLICATION_JSON)
//	public void deleteEmp(@PathParam("blogId") int blogId){
//		System.out.println("Data Recieved in delete : " + blogId);
//		//int x=EmployeeDao.deleteRecord(empId);
//		BlogDAO blogDAO = new BlogDAO();
//		Blog blog = blogDAO.deleteBlog(blogId);
//		.deleteEmp(employee);
//
//	}	
    @Path("/uploadBlog")
    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public void uploadBlog(@FormDataParam("Image")InputStream fileInputStream,@FormDataParam("Image") FormDataContentDisposition formDataContentDisposition,
    		@FormDataParam("article")String article){
    	int read = 0;
    	byte[] bytes = new byte[1024];
    	String path = this.getClass().getClassLoader().getResource("").getPath();
    	String pathArr[] = path.split("/WEB-INF/classes/");
    	FileOutputStream out;
    	try{
    		out = new FileOutputStream(new File(pathArr[0]+"/image/",formDataContentDisposition.getFileName()));
    		while((read=fileInputStream.read(bytes))!=-1){
    			out.write(bytes,0,read);
    		}
    		out.flush();
    		out.close();
    	}catch(IOException e){
    		e.printStackTrace();
    	}
    	 Blog blog = new Blog();
    	 blog.setImage(formDataContentDisposition.getFileName());
    	 blog.setArticle(article);
    	 BlogDAO blogDAO = new BlogDAO();
    	 blogDAO.addBlog(blog);
    	 System.out.println(blog);
    	 
    }
    @Path("addDiscussion")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
	public void submitDiscussion(Discussion discussion) {
		System.out.println("Data Recieved in discussion : " + discussion); 
		DiscussionDAO discussionDAO = new DiscussionDAO();
		discussion.getClient();
		discussionDAO.addDiscussion(discussion);
		
	}
    @Path("updateDiscussion")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void updateDiscussion(Discussion discussion){
		System.out.println("Data Recieved in update discussion : " + discussion);
		DiscussionDAO discussionDAO = new DiscussionDAO();
		discussionDAO.editDiscussion(discussion);
	}
    @Path("getAllDiscussions")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Discussion> getDiscussionAll(){
		/*List<Employee> empList = EmployeeDao.getAllEmployees();
		   return empList;*/
		System.out.println("Recieved in getAllDiscussion: " ); 
		DiscussionDAO discussionDAO = new DiscussionDAO();
		List<Discussion> discussions = discussionDAO.getAllDiscussions();
		
		return discussions;
		
	}
    @Path("getMyDiscussion/{clientId}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Discussion getDiscussionById(@PathParam("clientId") int clientId){
    	System.out.println("Recieved in getDiscussionByID : " + clientId);
    	DiscussionDAO discussionDAO = new DiscussionDAO();
    	Discussion discussion = discussionDAO.getDiscussion(clientId);
    	return discussion;
    }
    @Path("getAllLoginIds")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<String> getAllloginIds(){
    	return HibernateTemplate.getAllLoginIds();
    }
//    public static List<String> hello(List<String> mailList,Events event) throws MessagingException {
//		System.out.println("in myresource1");
//		Address venue = event.getAddress();
//		MimeMultipart content = new MimeMultipart("related");
//		//String cid = "image1";
//		//String poster = "/home/adminpc/Desktop/RESTAPI/image/"+event.getPoster(); 
//		String subject="CO@PRO - Connecting Professionals: " + event.getEventName();
//		String body="<h1>Greetings from CoPro!!!</h1><h3>Hello Techi, Hope you are doing good.There is an event coming up mark-up your calender, refer below for further details, Hoping for your active participation</h3><h4>Name: "
//		+ event.getEventName()+"</h4><h4>Topic: " + event.getEventDomain() +"</h4><h4>Category: "+event.getEventTag()+"</h4><h4>Website: " + event.getEventUrl()+"</h4><h4>Starts At :"
//		+event.getStartDate()+"</h4><h4>Ends At :"+ event.getEndDate() +"</h4><h4>Registration Fee :"+ event.getregFee() +"</h4><h4>Venue: " + venue.getStreet() + ", " + venue.getArea() + ", " + venue.getCity() + ", " + venue.getState() +"</h4><h4>Contact us: "
//		+ event.getMobile()+"</h4><img src=\"cid:image\"><h4>Regards</h4><h5>Co@Pro</h5>";
//		
//		List<String> result = null; 
//		System.out.println(mailList);
//		System.out.println(mailList.size());
//			String host = "smtp.gmail.com";
//			String from = "anusha15216@gmail.com";
//			String pass = "rasikanna123";
//			Properties props = System.getProperties();
//			props.put("mail.smtp.starttls.enable", "true"); // added this line
//			props.put("mail.smtp.host", host);
//			props.put("mail.smtp.user", from);
//			props.put("mail.smtp.password", pass);
//			props.put("mail.smtp.port", "587");
//			props.put("mail.smtp.auth", "true");
//			List<String> to = mailList; // added this line
//			Session session = Session.getDefaultInstance(props, null);
//			MimeMessage message = new MimeMessage(session);
//			message.setFrom(new InternetAddress(from));
//
//			InternetAddress[] toAddress = new InternetAddress[to.size()];
//
//			// To get the array of addresses
//
//			for( int i=0; i < to.size(); i++ )
//			{
//				// changed from a while loop
//				toAddress[i] = new InternetAddress(to.get(i));
//			}
//
//			for( int i=0; i < toAddress.length; i++)
//			{
//				// changed from a while loop
//				message.addRecipient(Message.RecipientType.TO, toAddress[i]);
//			}
//
//			message.setSubject(subject);
//			//message.setText(body);
//			// This mail has 2 part, the BODY and the embedded image
//	         MimeMultipart multipart = new MimeMultipart("related");
//
//	         // first part (the html)
//	         MimeBodyPart messageBodyPart = new MimeBodyPart();
//	         //String htmlText = "<H1>Hello</H1><img src=\"cid:image\">";
//	         messageBodyPart.setContent(body, "text/html");
//	         // add it
//	       //  multipart.addBodyPart(messageBodyPart);
//
//	         // second part (the image)
//	         // messageBodyPart = new MimeBodyPart();
//	        //  DataSource fds = new FileDataSource("D:\\Co@ProWorkspace\\DEMO\\src\\assets\\img\\" + event.getPoster());
//
//	       //  messageBodyPart.setDataHandler(new DataHandler(fds));
//	       //  messageBodyPart.setHeader("Content-ID", "<image>");
//
//	         // add image to the multipart
//	        // multipart.addBodyPart(messageBodyPart);
//
//	         // put everything together
//	         message.setContent(multipart);
//			//message.setContent(content);
//			Transport transport = session.getTransport("smtp");
//
//			transport.connect(host, from, pass);
//			transport.sendMessage(message, message.getAllRecipients());
//
//			transport.close();
//			System.out.println("success");
//			result.add("success");
//		System.out.println(result);
//		return result;
//	}
    @Path("emailSending")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void email(Client client){
    	System.out.println("in mail");
    	EmailSending emailSending = new EmailSending();
    	emailSending.sendEmail(client);
    }
}
