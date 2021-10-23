import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {

  imageUrl:string;
  fileToUpload:File=null;
  reader:FileReader;
  logo:any;
  constructor(private service:ClientService) {
    this.imageUrl='/assets/images/healthform.jpg';
    this.logo = '/assets/images/logo.png';
   }

  ngOnInit(): void {
  }
  handleFileInput(file:FileList){
    this.fileToUpload=file.item(0);
    this.reader=new FileReader();
    this.reader.onload=(event:any)=>{
      this.imageUrl=event.target.result;
      console.log(this.imageUrl);
    };
  }
  OnSubmit(imageForm:any){
    console.log(imageForm);
    this.service.postFile(imageForm,this.fileToUpload).subscribe(
      data=>{
        localStorage.setItem('dietplan',JSON.stringify(imageForm));
        console.log('done'),this.imageUrl='/assets/images/healthform.jpg';}
    );
  }
}
