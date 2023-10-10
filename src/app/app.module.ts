import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from "@angular/material/divider";
import { PhysiotherapistProfileComponent } from './appointments/pages/physiotherapist-profile/physiotherapist-profile.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {
  PhysiotherapistListComponent
} from "./therapy-coordination/pages/physiotherapist-list/physiotherapist-list.component";
import {NgIf} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {BookConsultationComponent} from "./appointments/pages/book-consultation/book-consultation.component";
import {AddReviewComponent} from "./social/pages/add-review/add-review.component";
import {LoginComponent} from "./security/pages/login-in/login.component";
import {SignupComponent} from "./security/pages/signup/signup.component";
import {PatientRegisterComponent} from "./security/pages/patient-register/patient-register.component";
import {
  PhysiotherapistRegisterComponent
} from "./security/pages/physiotherapist-register/physiotherapist-register.component";
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    PhysiotherapistListComponent,
    PhysiotherapistProfileComponent,
    BookConsultationComponent,
    AddReviewComponent,
    LoginComponent,
    SignupComponent,
    PatientRegisterComponent,
    PhysiotherapistRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgIf,
    MatSelectModule,
    HttpClientModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
