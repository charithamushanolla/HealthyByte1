import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.css']
})
export class YogaComponent implements OnInit {
  logo:any;
  constructor() { 
    this.logo = '/assets/images/logo.png';
  }

  ngOnInit(): void {
  }

}
