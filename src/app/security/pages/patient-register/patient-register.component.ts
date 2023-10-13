import { Component } from '@angular/core';
import {Patient} from "../../model/patient";
import {PatientService} from "../../services/patient.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    '',
    0,
    ''
  );
  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router,
  ) {}

  submitPatientForm() {
    if (this.registerForm && this.registerForm.get('birthdayDate')) {
      const birthdayDate = this.registerForm.get('birthdayDate')!.value;
      if (birthdayDate) {
        const formattedBirthday = this.formatDate(birthdayDate);
        this.patient.birthdayDate = formattedBirthday;
        this.patientService.createPatient(this.patient).subscribe(
          () => {
            this.router.navigate(['/physiotherapist-list']);
          },
          (error) => {
            console.error('Error al crear paciente:', error);
          }
        );
      }
    }
  }
  registerForm: FormGroup = this.formBuilder.group({
    dni: ['', {validators: [Validators.required,Validators.pattern(/^\d{8}$/)], updatedOn: 'change'}],
    age: ['', {validators: [Validators.required], updatedOn: 'change'}],
    birthdayDate: ['', {validators: [Validators.required], updatedOn: 'change'}],
    location: ['', {validators: [Validators.required], updatedOn: 'change'}]
  })
  formatDate(date: string): string {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
