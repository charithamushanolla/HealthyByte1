import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare var jQuery: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  clientdetails: any;
  logo:string;
  constructor(private service:ClientService,private router: Router,private toastr: ToastrService) {
    this.imageUrl='/assets/images/diet2.jpg'
    this.imageUrl2='/assets/images/yoga1.jpg'
    this.imageUrl3='/assets/images/fitness.jpg'
    this.logo = '/assets/images/logo.png'
    this.clientdetails = {loginId: '',password:''};
   }

  ngOnInit(): void {
  }
  showLoginPopup(client: any) {
    this.clientdetails = client;
    jQuery('#loginModel').modal('show');
  }
  
 async loginSubmit(loginForm:any){
   await this.service.loginDietician(loginForm.loginId, loginForm.password).then((result1: any)=>{
    if(result1 != null){
      this.service.setUserLoggedIn();
      localStorage.setItem('dietician',JSON.stringify(result1));
      this.toastr.success("Welcome back, Dietician", "Notification");
      // this.notifyService.showSuccess("Welcome back, D", "Notification");
      this.router.navigate(['dieticianpage']);
    } else{
    this.service.loginClient(loginForm.loginId, loginForm.password).then((result: any) => {
   //console.log(loginForm);
   if(result != null){
     this.service.setUserLoggedIn();
     localStorage.setItem('currentUser',JSON.stringify(result));
     this.toastr.success("Login Success", "Notification");
     this.router.navigate(['main2']);
   }  
   else {
     alert("Login Failed")
   }
 },
  (error)=> {

 })
}
  },(error)=> {

  }) }
 
}
