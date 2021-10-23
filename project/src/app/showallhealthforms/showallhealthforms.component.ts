import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

declare var jQuery: any;
@Component({
  selector: 'app-showallhealthforms',
  templateUrl: './showallhealthforms.component.html',
  styleUrls: ['./showallhealthforms.component.css']
})
// export class ShowallhealthformsComponent implements OnInit {
//   healthForms: any;
//   logo:any;
//   constructor(private service:ClientService) { 
//     this.logo = '/assets/images/logo.png';
//   }

//   ngOnInit(){
//     this.service.getAllHealthForms().subscribe((result: any) => { console.log(result); this.healthForms = result; });
//   }

// }


export class ShowallhealthformsComponent implements OnInit {
  healthForms: any;
  logo:any;
  imageUrl:string;
  fileToUpload:File=null;
  reader:FileReader;
  healthForm : any;
  imageForm : any;
  editObject:any;
  constructor(private service:ClientService) { 
    this.logo = '/assets/images/logo.png';
    this.imageUrl='/assets/images/healthform.jpg';
    //this.imageForm = {};
    this.editObject ={};
  }

  ngOnInit(){
    this.service.getAllHealthForms().subscribe((result: any) => { console.log(result); this.healthForms = result; });
  }
 
  showDietPopup(healthForm : any) {
    this.editObject =  healthForm;
    console.log("shoe diet popup "+ healthForm);
    jQuery('#healthFormModel').modal('show');
  }

  // handleFileInput(file:FileList){
  //   this.fileToUpload=file.item(0);
  //   this.reader=new FileReader();
  //   this.reader.onload=(event:any)=>{
  //     this.imageUrl=event.target.result;
  //     console.log(this.imageUrl);
  //   };
  // }
  // OnSubmit(imageForm:any){
  //  this.imageForm.morningDiet = imageForm.morningDiet;
  //  this.imageForm.afternoonDiet = imageForm.afternoonDiet;
  //  this.imageForm.eveningDiet = imageForm.eveningDiet;
  //  this.imageForm.phyActivities= imageForm.phyActivities;

  //   this.service.postFile(this.imageForm,imageForm.fileName).subscribe(
  //     data=>{
  //      // localStorage.setItem('dietplan',JSON.stringify(imageForm));
  //       console.log('morningDiet '+ this.imageForm.morningDiet),this.imageUrl='/assets/images/healthform.jpg';}
  //   );


  // }
  updateHealthForm(){
    this.service.updateHealthForm1(this.editObject).subscribe();
    console.log(this.editObject);
  }


}
