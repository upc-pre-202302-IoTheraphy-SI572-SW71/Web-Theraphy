import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from "@angular/material/divider";

import {BookConsultationComponent} from "./appointments/pages/book-consultation/book-consultation.component";
import {MatButtonModule} from "@angular/material/button";

import { AddReviewComponent } from './social/pages/add-review/add-review.component';
import {
  PhysiotherapistListComponent
} from "./therapy-coordination/pages/physiotherapist-list/physiotherapist-list.component";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [
    AppComponent,
    PhysiotherapistListComponent,
    BookConsultationComponent,
    AddReviewComponent
  ],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
