import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../../services/patient.service";
import {Router} from "@angular/router";
import {Physiotherapist} from "../../model/physiotherapist";
import {PhysiotherapistService} from "../../services/physiotherapist.service";

@Component({
  selector: 'app-physiotherapist-register',
  templateUrl: './physiotherapist-register.component.html',
  styleUrls: ['./physiotherapist-register.component.css']
})
export class PhysiotherapistRegisterComponent {

  physiotherapist: Physiotherapist = new Physiotherapist(
    0,
    '',
    '',
    0,
    '',
    '',
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
    this.physiotherapistService.createPhysiotherapist(this.physiotherapist).subscribe(
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
    specialization: ['', {validators: [Validators.required], updatedOn: 'change'}],
    age: ['', {validators: [Validators.required], updatedOn: 'change'}],
    location: ['', {validators: [Validators.required], updatedOn: 'change'}],
    birthdayDate: ['', {validators: [Validators.required], updatedOn: 'change'}],
    fees: ['', {validators: [Validators.required], updatedOn: 'change'}],
  })

}
