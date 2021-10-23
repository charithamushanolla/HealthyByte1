import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

declare var jQuery: any;
@Component({
  selector: 'app-healthformdetails',
  templateUrl: './healthformdetails.component.html',
  styleUrls: ['./healthformdetails.component.css']
})
export class HealthformdetailsComponent implements OnInit {
  healthForm: any;
  client: any;
  editObject:any;
  constructor(private service:ClientService,private router:Router) {
    this.client=service.getClient('currentUser');
    this.editObject={age:'',weight:'',height:'',bloodGrp:'',medicalCondition:'',dailyActivity:'',gender:'',bmi:''};
   }

  ngOnInit(): void {
    this.healthForm = JSON.parse( localStorage.getItem('curHealthForm'));
    console.log( "Inside Health Details", this.healthForm);
    
  }
  showEditPopup(healthForm: any) {
    this.editObject = healthForm;
    jQuery('#healthFormModel').modal('show');
  }
  updateHealthForm() {
    this.editObject.bmi = Math.round(this.editObject.weight/(this.editObject.height * this.editObject.height))
    this.service.updateHealthForm(this.editObject).subscribe();
    console.log(this.editObject);
  }
  yourdietredirect(){
    this.router.navigate(['yourdiet']);
  }

}
