import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhysiotherapistListComponent } from './therapy-coordination/pages/physiotherapist-list/physiotherapist-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from "@angular/material/divider";

import {BookConsultationComponent} from "./appointments/pages/book-consultation/book-consultation.component";
import {MatButtonModule} from "@angular/material/button";

import {PhysiotherapistListComponent} from "./appointments/pages/physiotherapist-list/physiotherapist-list.component";
import { LoginComponent } from './security/pages/login-in/login.component';
import { SignupComponent } from './security/pages/signup/signup.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatRadioModule} from "@angular/material/radio";
import { PatientRegisterComponent } from './security/pages/patient-register/patient-register.component';
import { PhysiotherapistRegisterComponent } from './security/pages/physiotherapist-register/physiotherapist-register.component';
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AppComponent,
    PhysiotherapistListComponent,

    BookConsultationComponent
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
    MatButtonModule

    LoginComponent,
    SignupComponent,
    PatientRegisterComponent,
    PhysiotherapistRegisterComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
