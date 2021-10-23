import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { BmiPipe } from '../bmi.pipe';

@Component({
  selector: 'app-healthform',
  templateUrl: './healthform.component.html',
  styleUrls: ['./healthform.component.css'],
  providers: [BmiPipe]
})
export class HealthformComponent implements OnInit {
  healthForm: any;
  curClient:any;
  bmiPipe: any;
  constructor(private router: Router,private service: ClientService,private bmipipe:BmiPipe) {
    //this.healthForm = {age:'',weight:'',height:'',bloodGrp:'',medicalCondition:'',dailyActivity:'',gender:'',clientId:'',
                   //  client:{clientId:'',clientName:'',dob:'',PhoneNo:'',emailId:'',loginId:'',password:'',nationality:'',}}
      this.healthForm = {healthFormId:'',age:'',weight:'',height:'',bloodGrp:'',medicalCondition:'',dailyActivity:'',gender:'',
                     client:{}};
  }

  ngOnInit(): void {
    
   this.curClient=JSON.parse(localStorage.getItem('currentUser'));
   this.bmiPipe = this.bmipipe.transform(this.healthForm.bmi, this.healthForm.weight,this.healthForm.height);
  }
  healthFormSubmit(healthform:any): void{
    //console.log(this.curClient);
    // this.curClient.healthForm.healthFormId = this.healthForm.healthFormId;
    // this.service.updateClient(this.curClient);
    // console.log(this.curClient);
    this.healthForm.client = this.curClient;
    this.healthForm.bmi = Math.round(this.healthForm.weight/(this.healthForm.height * this.healthForm.height));
    this.service.submitHealthForm(this.healthForm).subscribe((result: any) => { 
      //this.service.setUserLoggedIn();
     // this.service.setHealthForm('healthForm',JSON.stringify(result));
      localStorage.setItem('curHealthForm',JSON.stringify(this.healthForm));
      this.router.navigate(['checkDiet']);
     });
   // console.log(healthForm);
      
  }

  currentHealthForm(){
    return JSON.parse(localStorage.getItem('currentHealthForm'));
  }

}