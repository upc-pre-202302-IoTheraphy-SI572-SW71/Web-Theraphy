import { Component } from '@angular/core';
import {User} from "../../model/CreateUsers/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: User = new User(
    0,
    '',
    '',
    '',
    '',
    ''
  );

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  }

  registerUser(){
    this.userService.register(this.user).subscribe(
      () => {
        if (this.user.role === 'PATIENT') {
          this.router.navigate(['/registration-patient']);
        }else if (this.user.role === 'PHYSIOTHERAPIST'){
          this.router.navigate(['/registration-physiotherapist']);
        }
      },
      (error) => {
        console.error('Error de registro: ', error);
      }
    );
  }

  registerForm: FormGroup = this.formBuilder.group({
    firstname: ['', {validators: [Validators.required], updatedOn: 'change'}],
    lastname: ['', {validators: [Validators.required], updatedOn: 'change'}],
    username: ['', {validators: [Validators.required], updatedOn: 'change'}],
    password: ['', {validators: [Validators.required], updatedOn: 'change'}],
    role: ['', {validators: [Validators.required], updatedOn: 'change'}],
  })
}
