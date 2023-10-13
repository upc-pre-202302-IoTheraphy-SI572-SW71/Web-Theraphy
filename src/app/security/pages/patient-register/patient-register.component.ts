import { Component } from '@angular/core';
import {Patient} from "../../model/patient";
import {PatientService} from "../../services/patient.service";;
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent {
  patient: Patient = new Patient(
    0,
    '',
    0,
    'dasd',
    '',
    0,
    ''
  );

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  submitPatientForm() {

    this.patientService.createPatient(this.patient).subscribe(
      () => {
        this.router.navigate(['/physiotherapist-list']);
      },
      (error) => {
        console.error('Error al crear paciente:', error);
      }
    );
  }

  registerForm: FormGroup = this.formBuilder.group({
    dni: ['', {validators: [Validators.required], updatedOn: 'change'}],
    age: ['', {validators: [Validators.required], updatedOn: 'change'}],
    birthdayDate: ['', {validators: [Validators.required], updatedOn: 'change'}],
    location: ['', {validators: [Validators.required], updatedOn: 'change'}]
  })
}
