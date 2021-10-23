import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

declare var jQuery: any;


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  client: any;
  editObject: any;
  constructor(private service: ClientService) {
    this.client=service.getClient('currentUser');
    this.editObject = {clientName: '',dob:'', phoneNo: '',emailId: '',loginId: ''}
   }

  ngOnInit(): void {
  }
  showEditPopup(client: any) {
    this.editObject = client;
    jQuery('#clientModel').modal('show');
  }
  updateClient() {
    this.service.updateClient(this.editObject).subscribe();
    console.log(this.editObject);
  }

}
