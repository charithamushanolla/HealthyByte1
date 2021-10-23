import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AuthGuard } from './auth.guard';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BmiPipe } from './bmi.pipe';
import { HealthformComponent } from './healthform/healthform.component';
import { HealthformdetailsComponent } from './healthformdetails/healthformdetails.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { Main2Component } from './main2/main2.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DieticianpageComponent } from './dieticianpage/dieticianpage.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { GetDietsComponent } from './get-diets/get-diets.component';
import { ShowallclientsComponent } from './showallclients/showallclients.component';
import { ShowallhealthformsComponent } from './showallhealthforms/showallhealthforms.component';
import { YourdietComponent } from './yourdiet/yourdiet.component';
import { YogaComponent } from './yoga/yoga.component';
import { FitnessComponent } from './fitness/fitness.component';
import { BlogComponent } from './blog/blog.component';
import { DieticianprofileComponent } from './dieticianprofile/dieticianprofile.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MyblogComponent } from './myblog/myblog.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { MydiscussionComponent } from './mydiscussion/mydiscussion.component';
import { DietdiscussionComponent } from './dietdiscussion/dietdiscussion.component';
import { MyquestionsComponent } from './myquestions/myquestions.component';
import { CheckdietComponent } from './checkdiet/checkdiet.component';

const appRoot: Routes = [{path: 'front',component: FrontpageComponent},
                         {path: 'login',component: LoginComponent},
                         {path: 'register',component: RegisterComponent},
                         {path: '',component: MainComponent},
                         {path: 'healthForm',component: HealthformComponent},
                         {path: 'healthformdetails',component: HealthformdetailsComponent},
                         {path: 'main2',component: Main2Component},
                         {path: 'myprofile',component:MyprofileComponent},
                         {path: 'dieticianpage',component:DieticianpageComponent},
                         {path: 'imageupload',component:ImageuploadComponent},
                         {path: 'getdiets',component:GetDietsComponent},
                         {path: 'showallclients',component:ShowallclientsComponent},
                         {path: 'showallhealthforms',component:ShowallhealthformsComponent},
                         {path: 'yourdiet',component:YourdietComponent},
                         {path: 'yoga',component:YogaComponent},
                         {path: 'fitness',component:FitnessComponent},
                         {path: 'blog',component:BlogComponent},
                         {path: 'dieticianprofile',component:DieticianprofileComponent},
                         {path: 'reviews',component:ReviewsComponent},
                         {path: 'myblog',component:MyblogComponent},
                         {path: 'discussion',component:DiscussionsComponent},
                         {path: 'mydiscussion',component:MydiscussionComponent},
                         {path: 'dietdiscussion',component:DietdiscussionComponent},
                         {path: 'myquestions',component:MyquestionsComponent},
                         {path: 'checkDiet',component:CheckdietComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MainComponent,
    BmiPipe,
    HealthformComponent,
    HealthformdetailsComponent,
    FrontpageComponent,
    Main2Component,
    MyprofileComponent,
    DieticianpageComponent,
    ImageuploadComponent,
    GetDietsComponent,
    ShowallclientsComponent,
    ShowallhealthformsComponent,
    YourdietComponent,
    YogaComponent,
    FitnessComponent,
    BlogComponent,
    DieticianprofileComponent,
    ReviewsComponent,
    MyblogComponent,
    DiscussionsComponent,
    MydiscussionComponent,
    DietdiscussionComponent,
    MyquestionsComponent,
    CheckdietComponent,
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule.forRoot(appRoot),HttpClientModule,
    AppRoutingModule,ToastrModule.forRoot(),  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
