import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clientdetails: any;
  constructor(private router: Router ,private service:ClientService) { 
    this.clientdetails = {loginId: '',password:''};
  }

  ngOnInit(): void {
  }
  
   loginSubmit(loginForm:any){
     if(loginForm.loginId==='admin' && loginForm.password==='admin'){
       this.service.setUserLoggedIn();
       this.router.navigate(['dieticianpage']);
     } else{
    this.service.loginClient(loginForm.loginId, loginForm.password).then((result: any) => {
    //console.log(loginForm);
    if(result != null){
      this.service.setUserLoggedIn();
      localStorage.setItem('currentUser',JSON.stringify(result));
      this.router.navigate(['main2']);
    } else {
      alert("Invalid Credentials")
    }
  }, 
  
   (error)=> {

  })
}
   }
currentUser(){
  return JSON.parse(localStorage.getItem('currentUser'));
}


  

}
