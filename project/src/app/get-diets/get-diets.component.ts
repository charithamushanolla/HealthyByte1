import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-get-diets',
  templateUrl: './get-diets.component.html',
  styleUrls: ['./get-diets.component.css']
})
export class GetDietsComponent implements OnInit {
  dietPlans: any;
  logo:any;
  constructor(private service:ClientService) {
    this.logo = '/assets/images/logo.png';
   }

  ngOnInit() {
    this.service.getAllDietPlans().subscribe((res:any)=>{console.log(res); this.dietPlans=res; })
  }

}
