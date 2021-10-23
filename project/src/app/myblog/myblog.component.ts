import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css']
})
export class MyblogComponent implements OnInit {
  imageUrl:string;
  fileToUpload:File=null;
  reader:FileReader;
  client:any;
  blogForm:any;
  logo:any;
  constructor(private service:ClientService,private router:Router) {
    this.client = JSON.parse(localStorage.getItem('currentUser'));
    this.blogForm = {article:'',client:{}};
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
  submitBlog(blogform:any){
    console.log(blogform);
    this.service.postBlog(blogform,this.fileToUpload).subscribe(
      data=>{
        localStorage.setItem('curblog',JSON.stringify(blogform));
        console.log('done'),this.imageUrl='/assets/images/healthform.jpg';}
    );
    this.router.navigate(['blog']);
  }

}
