import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../../services/patient.service";
import {Router} from "@angular/router";
import {createPhysiotherapist} from "../../model/CreateUsers/createPhysiotherapist";
import {PhysiotherapistService} from "../../services/physiotherapist.service";

@Component({
  selector: 'app-physiotherapist-register',
  templateUrl: './physiotherapist-register.component.html',
  styleUrls: ['./physiotherapist-register.component.css']
})
export class PhysiotherapistRegisterComponent {

  physiotherapist: createPhysiotherapist = new createPhysiotherapist(
    0,
    '',
    '',
    0,
    '',
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    '',
    0,
    0,
    0,
    0,
    0
  );

  constructor(
    private formBuilder: FormBuilder,
    private physiotherapistService: PhysiotherapistService,
    private router: Router
  ) {
  }

  submitPhysiotherapistForm() {
    if (this.registerForm && this.registerForm.get('birthdayDate')) {
      const birthdayDate = this.registerForm.get('birthdayDate')!.value;
      if (birthdayDate) {
        const formattedBirthday = this.formatDate(birthdayDate);
        this.physiotherapist.birthdayDate = formattedBirthday;
        this.physiotherapistService.createPhysiotherapist(this.physiotherapist).subscribe(
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
    specialization: ['', {validators: [Validators.required], updatedOn: 'change'}],
    age: ['', {validators: [Validators.required,Validators.min(18)], updatedOn: 'change'}],
    location: ['', {validators: [Validators.required], updatedOn: 'change'}],
    birthdayDate: ['', {validators: [Validators.required,this.validateBirthday], updatedOn: 'change'}],
    fees: ['', {validators: [Validators.required], updatedOn: 'change'}],
    experience: ['', {validators: [Validators.required], updatedOn: 'change'}],
  })
  validateBirthday(control: AbstractControl): { [key: string]: any } | null {
    if (control.value) {
      const birthday = new Date(control.value);
      const today = new Date();
      const age = today.getFullYear() - birthday.getFullYear();

      if (age < 18) {
        return { 'ageInvalid': true };
      }
    }

    return null;
  }
  formatDate(date: string): string {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
