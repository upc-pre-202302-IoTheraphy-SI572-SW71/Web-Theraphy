import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {PhysiotherapistListComponent} from "./consultations/pages/physiotherapist-list/physiotherapist-list.component";
import {BookConsultationComponent} from "./consultations/pages/book-consultation/book-consultation.component";
import {
  PhysiotherapistProfileComponent
} from "./consultations/pages/physiotherapist-profile/physiotherapist-profile.component";
import {AddReviewComponent} from "./social/pages/add-review/add-review.component";
import {LoginComponent} from "./security/pages/login-in/login.component";
import {SignupComponent} from "./security/pages/signup/signup.component";
import {PatientRegisterComponent} from "./security/pages/patient-register/patient-register.component";
import {
  PhysiotherapistRegisterComponent
} from "./security/pages/physiotherapist-register/physiotherapist-register.component";
import {ConsultationDetailsComponent} from "./consultations/pages/consultation-details/consultation-details.component";
import {SidenavComponent} from "./shared/components/sidenav/sidenav.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MatRadioModule} from "@angular/material/radio";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatLegacyTooltipModule} from "@angular/material/legacy-tooltip";
import {MyTheraphyComponent} from "./therapy/pages/my-theraphy/my-theraphy.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {HomePatientComponent} from "./home/pages/home-patient/home-patient.component";

import {MatSliderModule} from "@angular/material/slider";
import {ToastrModule} from "ngx-toastr";
import { NgxStripeModule } from 'ngx-stripe';
import {MatDialogModule} from "@angular/material/dialog";
import { PaymentComponent } from './payment/pages/payment/payment.component';
import { ConsultationsListComponent } from './consultations/pages/consultations-list/consultations-list.component';
import { DiagnosisDialogComponent } from './shared/components/diagnosis-dialog/diagnosis-dialog.component';
import { LogOutDialogComponent } from './shared/components/log-out-dialog/log-out-dialog.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import {HomeDoctorComponent} from "./home/pages/home-doctor/home-doctor.component";


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
    PhysiotherapistRegisterComponent,
    ConsultationDetailsComponent,
    SidenavComponent,
    MyTheraphyComponent,
    HomePatientComponent,
    HomeDoctorComponent,
    PaymentComponent,
    ConsultationsListComponent,
    DiagnosisDialogComponent,
    LogOutDialogComponent,
    PageNotFoundComponent
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
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatLegacyTooltipModule,
    MatSliderModule,
    ToastrModule.forRoot(),
    NgxStripeModule.forRoot('pk_test_51O2RELCjW3JsFKOWismIZke5hD6PoJ5u2jaOx19m1AbSYgyw9pA3GLxl0Yb83MK0G3IVCiUp0UIzM2TOwMws1u2O00WNxCfi4U'),
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
