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
import {ConsultationsListComponent} from "./consultations/pages/consultations-list/consultations-list.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";
import {HomeDoctorComponent} from "./home/pages/home-doctor/home-doctor.component";
import {PatientProfileComponent} from "./profile/pages/patient-profile/patient-profile.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home-patient' , component: HomePatientComponent},
  {path: 'home-doctor' , component: HomeDoctorComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'auth-registration', component: SignupComponent},
  {path: 'registration-patient', component: PatientRegisterComponent},
  {path: 'registration-physiotherapist', component: PhysiotherapistRegisterComponent},

  {path: 'physiotherapist-list', component: PhysiotherapistListComponent},
  {path: 'physiotherapist-profile/:id', component: PhysiotherapistProfileComponent},
  {path: 'book-consultation/:id', component: BookConsultationComponent},
  {path: 'consultation-details/physiotherapist/:id', component: ConsultationDetailsComponent},
  {path: 'add-review/:id', component: AddReviewComponent},
  {path: 'my-theraphy', component: MyTheraphyComponent},
  {path: 'my-consultations-list', component: ConsultationsListComponent},
  {path: 'profile-patient', component: PatientProfileComponent},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
