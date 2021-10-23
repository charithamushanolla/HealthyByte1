import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-mydiscussion',
  templateUrl: './mydiscussion.component.html',
  styleUrls: ['./mydiscussion.component.css']
})
export class MydiscussionComponent implements OnInit {
  client:any;
  discussionForm:any;
  logo:any;
  constructor(private service:ClientService, private router: Router,private toastr: ToastrService) {
    this.discussionForm = {question:'',client:{}};
    this.logo = '/assets/images/logo.png';
   }

  ngOnInit(){
    this.client = JSON.parse(localStorage.getItem('currentUser'));
  }
  submitQuestion(discussion:any){
    this.discussionForm.client.clientId = this.client.clientId;
    this.service.addDiscussion(this.discussionForm).subscribe((result:any)=>{console.log(result)
    if(result!= null){
      this.toastr.success("Question posted Successfully", "Notification");
    }
    });
    this.router.navigate(['discussion']);
  }

}
