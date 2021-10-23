import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dieticianpage',
  templateUrl: './dieticianpage.component.html',
  styleUrls: ['./dieticianpage.component.css']
})
export class DieticianpageComponent implements OnInit {
  img1:string;
  img2:string;
  img3:string;
  img4:string;
  img5:string;
  logo:string;

  constructor() {
    this.img1 = "src/assets/images/dietician.jpg"
    this.img2 = "src/assets/images/uplaod.png"
    this.img3 = "src/assets/images/alldiets.jpg"
    this.img4 = "src/assets/images/allclients.jpg"
    this.img5 = "src/assets/images/allhealthforms.jpg"
    this.logo = '/assets/images/logo.png';
   }

  ngOnInit(): void {
  }

}
