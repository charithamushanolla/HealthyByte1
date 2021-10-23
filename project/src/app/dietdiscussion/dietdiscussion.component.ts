import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-dietdiscussion',
  templateUrl: './dietdiscussion.component.html',
  styleUrls: ['./dietdiscussion.component.css']
})
export class DietdiscussionComponent implements OnInit {
  discussions:any;
  editObject:any;
  logo:string;
  constructor(private service: ClientService) { 
    this.editObject = {answer:''};
    this.logo = '/assets/images/logo.png'
  }

  ngOnInit() {
    this.service.getAllDiscussions().subscribe((res:any)=>{console.log(res); this.discussions=res; })
  }
  submitanswer(discussion:any){
    this.editObject = discussion;
    this.service.updateDiscussion(this.editObject).subscribe();
    console.log(this.editObject);
  }
}
