import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  curClient:any;
  blogForm:any;
  blogs:any;
  logo:string;
  constructor(private service:ClientService,private router:Router) {
    //this.client = JSON.parse(localStorage.getItem('currentUser'));
    this.blogForm = {article:'',client:{}};
    this.logo = '/assets/images/logo.png'
   }

  ngOnInit(){
    this.curClient=JSON.parse(localStorage.getItem('currentUser'));
    console.log("curclient"+ this.curClient);
    this.service.getAllBlogs().subscribe((res:any)=>{console.log(res); this.blogs=res; })
  }
  showBlogPopup(){
    jQuery('#blogModel').modal('show');
  }
  submitBlog(blogform:any){
    this.blogForm.client = this.curClient;
    this.service.addBlog(this.blogForm).subscribe((result:any)=>{console.log(result)});
    localStorage.setItem('curBlog',JSON.stringify(this.blogForm));
  }
  myblog(){
    this.router.navigate(['myblog'])
  }

}
