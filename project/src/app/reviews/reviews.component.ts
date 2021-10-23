import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews:any;
  logo:any;
  constructor(private service:ClientService) {
    this.logo = '/assets/images/logo.png';
   }

  ngOnInit() {
    this.service.getAllReviews().subscribe((result: any) => { console.log(result); this.reviews = result; })
  }

}
