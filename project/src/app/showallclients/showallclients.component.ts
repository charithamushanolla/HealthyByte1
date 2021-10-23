import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-showallclients',
  templateUrl: './showallclients.component.html',
  styleUrls: ['./showallclients.component.css']
})
export class ShowallclientsComponent implements OnInit {
  clients: any;
  logo:any;
  constructor(private service:ClientService) {
    this.logo = '/assets/images/logo.png';
   }

  ngOnInit(){
    this.service.getAllClients().subscribe((result: any) => { console.log(result); this.clients = result; });
  }

}
