import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent implements OnInit {
  discussions:any;
  discussionForm:any;
  client:any;
  logo:string;
  constructor(private service:ClientService,private router:Router) { 
    this.discussionForm = {question:'',client:{}};
    this.logo = '/assets/images/logo.png';
  }

  ngOnInit(){
    this.client = JSON.parse(localStorage.getItem('currentUser'));
    this.service.getAllDiscussions().subscribe((res:any)=>{console.log(res); this.discussions=res; })
  }
  mydiscussion(){
    this.router.navigate(['mydiscussion']);
  }
  submitQuestion(discussion:any){
    this.discussionForm.client.clientId = this.client.clientId;
    this.service.addDiscussion(this.discussionForm).subscribe((result:any)=>{console.log(result)});

  }
  myQuestions(){
    this.router.navigate(['myquestions']);
  }

}
