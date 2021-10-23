import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ThrowStmt } from '@angular/compiler';

declare var jQuery: any;
@Component({
  selector: 'app-dieticianprofile',
  templateUrl: './dieticianprofile.component.html',
  styleUrls: ['./dieticianprofile.component.css']
})
export class DieticianprofileComponent implements OnInit {
  editObject: any;
  dietician:any;
  logo:string;
  constructor(private service: ClientService) {
    this.dietician = JSON.parse(localStorage.getItem('dietician'));
    this.editObject = {dieticiabName: '', phoneNo: '',emailId: '',loginId: '',nationality:''};
    this.logo = '/assets/images/logo.png';
   }

  ngOnInit(): void {
  }
  showEditPopup(dietician: any) {
    this.editObject = dietician;
    jQuery('#dieticianModel').modal('show');
  }
  updateDietician(){
    this.service.updateDietician(this.editObject).subscribe();
    console.log(this.editObject);
  }

}
