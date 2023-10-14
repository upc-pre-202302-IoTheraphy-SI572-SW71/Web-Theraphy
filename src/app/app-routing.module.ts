import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PhysiotherapistProfileComponent
} from "./consultations/pages/physiotherapist-profile/physiotherapist-profile.component";
import {
  PhysiotherapistListComponent
} from "./consultations/pages/physiotherapist-list/physiotherapist-list.component";
import {LoginComponent} from "./security/pages/login-in/login.component";
import {SignupComponent} from "./security/pages/signup/signup.component";
import {PatientRegisterComponent} from "./security/pages/patient-register/patient-register.component";
import {
  PhysiotherapistRegisterComponent
} from "./security/pages/physiotherapist-register/physiotherapist-register.component";
import {BookConsultationComponent} from "./consultations/pages/book-consultation/book-consultation.component";
import {AddReviewComponent} from "./social/pages/add-review/add-review.component";
import {ConsultationDetailsComponent} from "./consultations/pages/consultation-details/consultation-details.component";
import {MyTheraphyComponent} from "./therapy/pages/my-theraphy/my-theraphy.component";
import {HomePatientComponent} from "./home/pages/home-patient/home-patient.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home-patient' , component: HomePatientComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'auth-registration', component: SignupComponent},
  {path: 'registration-patient', component: PatientRegisterComponent},
  {path: 'registration-physiotherapist', component: PhysiotherapistRegisterComponent},

  {path: 'physiotherapist-list', component: PhysiotherapistListComponent},
  {path: 'physiotherapist-profile/:id', component: PhysiotherapistProfileComponent},
  {path: 'book-consultation', component: BookConsultationComponent},
  {path: 'consultation-details', component: ConsultationDetailsComponent},
  {path: 'add-review', component: AddReviewComponent},
  {path: 'my-theraphy', component: MyTheraphyComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
