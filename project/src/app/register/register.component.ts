import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare var jQuery: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  client: any;
  countries: any;
  dieticians: any;
  clientdetails: any;
  clients:any;
  constructor(private router: Router,private service: ClientService, private toastr: ToastrService) { 
    this.client = {clientId: '', clientName: '', phoneNo: '',emailId: '',loginId: '',password:'',confirmpassword:''} 
    this.clientdetails = {loginId: '',password:''};
      
  }

  ngOnInit() {
    this.service.getCountriesList().subscribe((data: any) => {console.log(data); this.countries = data;});
    this.service.getAllLoginIds().subscribe((result: any) => { console.log(result); this.clients = result; });
  }

  registerSubmit(registerForm:any){
    
    this.service.registerClient(registerForm).subscribe((result: any) => { 
      this.service.setClient('client',JSON.stringify(result));
      this.toastr.success("Registered Successfully", "Notification");
      this.service.sendEmail(registerForm);
     // this.router.navigate(['login']);
      console.log(result); } );
    console.log(registerForm);
  

  
    //this.router.navigate(['login'])
    
  }
  showLoginPopup(client: any) {
    this.clientdetails = client;
    jQuery('#loginModel').modal('show');
  }
  loginSubmit(loginForm:any){
    this.service.loginDietician(loginForm.loginId, loginForm.password).then((result1: any)=>{
     if(result1 != null){
       this.service.setUserLoggedIn();
       localStorage.setItem('dietician',JSON.stringify(result1));
       this.toastr.success("Welcome Back Dietician", "Notification");
       this.router.navigate(['dieticianpage']);
     } else{
    this.service.loginClient(loginForm.loginId, loginForm.password).then((result: any) => {
    //console.log(loginForm);
    if(result != null){
      this.service.setUserLoggedIn();
      localStorage.setItem('currentUser',JSON.stringify(result));
      this.toastr.success("Login Success", "Notification");
      this.router.navigate(['main2']);
    } else {
      alert("Invalid Credentials")
    }
  }, 
 
   (error)=> {
 
  })
 }
   },(error)=> {
 
   }) }

}
