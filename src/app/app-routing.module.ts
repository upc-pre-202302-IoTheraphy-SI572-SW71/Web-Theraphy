import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhysiotherapistListComponent} from "./therapy-coordination/pages/physiotherapist-list/physiotherapist-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";

import {BookConsultationComponent} from "./appointments/pages/book-consultation/book-consultation.component";

const routes: Routes = [
  {path: 'physiotherapist-list', component: PhysiotherapistListComponent},
  {path: 'book-consultation', component: BookConsultationComponent}

import {LoginComponent} from "./security/pages/login-in/login.component";
import {SignupComponent} from "./security/pages/signup/signup.component";
import {PatientRegisterComponent} from "./security/pages/patient-register/patient-register.component";
import {
  PhysiotherapistRegisterComponent
} from "./security/pages/physiotherapist-register/physiotherapist-register.component";

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf],
  exports: [RouterModule]
})
export class AppRoutingModule { }
