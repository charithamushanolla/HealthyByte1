import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yourdiet',
  templateUrl: './yourdiet.component.html',
  styleUrls: ['./yourdiet.component.css']
})
export class YourdietComponent implements OnInit {
  client:any;
  healthForm:any;
  dietPlan: any;
  logo:any;
  url:any;
  curHealthForm: any;
  constructor(private service:ClientService,private router:Router) { 
    this.logo = '/assets/images/logo.png';
    this.url ="/assets/images/diet.jpg";
  }

  ngOnInit(): void {
    this.client = JSON.parse(localStorage.getItem('currentUser'));
    this.healthForm=JSON.parse(localStorage.getItem('curHealthForm'));
    // this.service.gethealthFormId(this.healthForm.healthFormId).subscribe((res:any)=>{console.log(res);this.curHealthForm=res;})
    // console.log("curHealthForm"+this.healthForm);
    // if(this.curHealthForm.morningDiet != null){
    //   this.getdiet(this.curHealthForm.client.clientId);
    // } else{
    //   this.router.navigate(['checkDiet']);
    // }
    this.getdiet(this.healthForm.client.clientId);

    // if(this.healthForm.bmi > 30){
    //   this.getdiet(1);
    // } else{
    //   this.getdiet(2);
    // }
  }
/*getbmi(bmi:any){
    if(bmi>30){
      return true;
    }else{
      return false;
    }
  }*/
  getdiet(clientId: any){
    this.service.gethealthFormById(clientId).subscribe((result: any) => {console.log("Inside ts",result); this.dietPlan = result; });
    console.log(this.dietPlan);
  }
  healthformdetailsredirect(){
    this.router.navigate(['healthformdetails']);
  }

}
