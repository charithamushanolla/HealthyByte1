import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit {
  logo:any;
  constructor() { 
    this.logo = '/assets/images/logo.png';
  }

  ngOnInit(): void {
  }

}
