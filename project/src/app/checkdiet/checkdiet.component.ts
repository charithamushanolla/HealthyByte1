import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkdiet',
  templateUrl: './checkdiet.component.html',
  styleUrls: ['./checkdiet.component.css']
})
export class CheckdietComponent implements OnInit {
  logo: any;
  client: any;
  healthForm:any;
  constructor(private router: Router) {
    this.logo = '/assets/images/logo.png';
    this.client = JSON.parse(localStorage.getItem('currentUser'));
    this.healthForm=JSON.parse(localStorage.getItem('curHealthForm'));
   }

  ngOnInit(): void {
  }
  healthformdetailsredirect(){
    this.router.navigate(['healthformdetails']);
  }

}
