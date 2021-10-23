import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from './localstorage.service';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private isUserLogged: any;
  constructor(private httpClient: HttpClient,private localstorage: LocalstorageService) { 
    this.isUserLogged = false;
  }
  setUserLoggedIn(): void{
    this.isUserLogged = true;
  }
  setUserLoggedOut(): void{
    this.isUserLogged = false;
  }
  getUserLogged(): any{
    return this.isUserLogged;
  }
  getCountriesList(): any{
    return this.httpClient.get('https://restcountries.eu/rest/v2/all');
  }
  registerClient(client: any) {
    return this.httpClient.post('RESTAPI2018/webapi/myresource/registerClient', client);
  }
  loginClient(loginId: string, password: string): any{
    return this.httpClient.get('RESTAPI2018/webapi/myresource/loginClient/' + loginId + '/' + password).toPromise();
  }
  loginDietician(loginId: string, password: string): any{
    return this.httpClient.get('RESTAPI2018/webapi/myresource/loginDietician/' + loginId + '/' + password).toPromise();
  }
  getAllDieticians():any{
    return this.httpClient.get('RESTAPI2018/webapi/myresource/getAllDieticians');
  }
  submitHealthForm(healthForm: any){
    console.log("Inside Service",healthForm);
    return this.httpClient.post('RESTAPI2018/webapi/myresource/submitHealthForm', healthForm);
  }
  addReview(reviews: any){
    return this.httpClient.post('RESTAPI2018/webapi/myresource/addReview', reviews);
  }
  setClient(key:any, client: any){
    return this.localstorage.set(key,client);
  }
  getClient(key:any){
    return this.localstorage.get(key);
  }
  updateClient(editObject:any){
    return this.httpClient.put('RESTAPI2018/webapi/myresource/updateClient', editObject);
  }
  updateDietician(editObject:any){
    return this.httpClient.put('RESTAPI2018/webapi/myresource/updateDietician', editObject)
  }
  setHealthForm(key:any,healthForm:any){
    return this.localstorage.set(key,healthForm);
  }
  getHealthForm(key:any){
    return this.localstorage.get(key);
  }
  updateHealthForm(editObject:any){
    return this.httpClient.put('RESTAPI2018/webapi/myresource/updateHealthForm',editObject);
  }
  postFile(ImageForm:any,fileToUpload:File){
    const formData:FormData=new FormData();
    formData.append('Image',fileToUpload,fileToUpload.name);
    formData.append('morningDiet',ImageForm.morningDiet);
    formData.append('afternoonDiet',ImageForm.afternoonDiet);
    formData.append('eveningDiet',ImageForm.eveningDiet);
    formData.append('phyActivities',ImageForm.phyActivities);
    return this.httpClient.post('RESTAPI2018/webapi/myresource/uploadImage',formData);
  }
  postBlog(BlogForm:any,fileToUpload:File){
    const formData:FormData=new FormData();
    formData.append('Image',fileToUpload,fileToUpload.name);
    formData.append('article',BlogForm.article);
    
    return this.httpClient.post('RESTAPI2018/webapi/myresource/uploadBlog',formData);
  }
  getAllDietPlans():any{
    return this.httpClient.get('RESTAPI2018/webapi/myresource/getAllDietPlans');
  }
  getAllClients(): any{
    return this.httpClient.get('RESTAPI2018/webapi/myresource/getAllclients');
  }
  getAllHealthForms():any{
    return this.httpClient.get('RESTAPI2018/webapi/myresource/getAllHealthForms');
  }
  getDietById(dietPlanId:any){
    return this.httpClient.get('RESTAPI2018/webapi/myresource/getDietById/'+ dietPlanId);
  }
  getAllReviews():any{
    return this.httpClient.get('RESTAPI2018/webapi/myresource/getAllReviews');
  }
  addBlog(blog:any){
    return this.httpClient.post('RESTAPI2018/webapi/myresource/addBlog',blog);
  }
  getAllBlogs():any{
    return this.httpClient.get('RESTAPI2018/webapi/myresource/getAllBlogs');
  }
  addDiscussion(discussion: any){
    return this.httpClient.post('RESTAPI2018/webapi/myresource/addDiscussion',discussion);
  }
  getAllDiscussions(){
    return this.httpClient.get('RESTAPI2018/webapi/myresource/getAllDiscussions');
  }
  updateDiscussion(editObject: any){
    return this.httpClient.put('RESTAPI2018/webapi/myresource/updateDiscussion',editObject);
  }
  getAllLoginIds(){
    return this.httpClient.get('RESTAPI2018/webapi/myresource/getAllLoginIds')
  }
  sendEmail(client: any){
    return this.httpClient.post('RESTAPI2018/webapi/myresource/emailSending',client);
  }
  gethealthFormById(clientId: any){
    return this.httpClient.get('RESTAPI2018/webapi/myresource/gethealthFormById/'+ clientId);
  }
  getMyDiscussions(clientId: any){
    return this.httpClient.get('RESTAPI2018/webapi/myresource/getMyQuestions/'+ clientId);
  }
  getClientById(clientId: any){
    return this.httpClient.get('RESTAPI2018/webapi/myresource/getClientById/'+ clientId);
  }
  updateHealthForm1(editObject:any){
    return this.httpClient.put('RESTAPI2018/webapi/myresource/updateHealthForm1',editObject);
  }
  gethealthFormId(clientId: any){
    return this.httpClient.get('RESTAPI2018/webapi/myresource/gethealthFormId/'+ clientId);
  }
}
