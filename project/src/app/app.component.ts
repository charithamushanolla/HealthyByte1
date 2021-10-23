import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  img1:any;
  img2:any;
  constructor(){
    this.img1 = "src/assets/images/dietician.jpg"
    this.img2 = "src/assets/images/uplaod.png"
  }
}
