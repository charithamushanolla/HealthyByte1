import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-myquestions',
  templateUrl: './myquestions.component.html',
  styleUrls: ['./myquestions.component.css']
})
export class MyquestionsComponent implements OnInit {
  discussions: any;
  client:any;
  logo: any;
  constructor(private service: ClientService,private router:Router) { 
    this.logo = '/assets/images/logo.png';
  }

  ngOnInit(): void {
    this.client = JSON.parse(localStorage.getItem('currentUser'));
    this.service.getMyDiscussions(this.client.clientId).subscribe((res:any)=>{console.log(res); this.discussions=res; });
  }
  myQuestions(clientId: any){
    this.service.getMyDiscussions(clientId).subscribe((res:any)=>{console.log(res); this.discussions=res; });
  }
  mydiscussion(){
    this.router.navigate(['mydiscussion']);
  }

}
