import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

declare var jQuery: any;

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component implements OnInit {

  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  curHealthForm: any;
  curClient: any;
  reviews: any;
  starList: boolean[] = [true,true,true,true,true];       // create a list which contains status of 5 stars
 rating:number; 
 logo:string;
 curUser: any;
 NULL: any;
  constructor(private router:Router,private service:ClientService) {
    this.imageUrl='/assets/images/diet2.jpg'
    this.imageUrl2='/assets/images/yoga1.jpg'
    this.imageUrl3='/assets/images/fitness.jpg'
    this.logo = '/assets/images/logo.png'
    this.reviews={rating:'',
                    client:{}};
   }

  ngOnInit(): void {
    this.curClient = JSON.parse(localStorage.getItem('currentUser'));
    this.curHealthForm = JSON.parse(localStorage.getItem('curHealthForm'));
     //this.service.getClientById(this.curClient.clientId).subscribe((res: any)=>{console.log(res); this.curUser=res});
   // console.log("curUser"+ this.curUser);
  }
  healthFormredirect(){
    if(this.curHealthForm.client.clientId == this.curClient.clientId){
      this.router.navigate(['yourdiet']);
    }else{
    this.router.navigate(['healthForm']);
    }
  }
  yogaRedirect(){
    this.router.navigate(['yoga']);
  }
  fitnessRedirect(){
    this.router.navigate(['fitness']);
  }
  mainRedirect(){
    this.router.navigate(['']);
}  
showReviewPopup() {
    //this.reviews = review;
    jQuery('#reviewModel').modal('show');
  }
setStar(data:any){
      this.rating=data+1;                               
      for(var i=0;i<=4;i++){  
        if(i<=data){  
          this.starList[i]=false;  
        }  
        else{  
          this.starList[i]=true;  
        }  
     }
     this.reviews.rating = this.rating;
     this.service.addReview(this.reviews).subscribe((result:any)=>{
      jQuery('#reviewModel').modal('hide');
       this.router.navigate(['']);
       console.log(result);
     });
 }  
  submitReview(reviewForm: any):void{
    //console.log(this.reviews);
    //console.log(this.curClient);
    this.reviews.client.clientId = this.curClient.clientId;
    //this.reviews.rating = JSON.getInt(reviewForm.value);
    this.service.addReview(this.reviews).subscribe((result:any)=>{
      this.router.navigate(['']);
    }
    );
  }
}
