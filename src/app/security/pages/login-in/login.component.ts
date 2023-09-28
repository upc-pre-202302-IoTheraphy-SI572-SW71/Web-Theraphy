import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  }

  login(){
    this.userService.login(this.username, this.password).subscribe(
      ()=>{
        this.router.navigate((['/physiotherapist-list']));
      },
      (error) => {
        console.error('Error de inicio de sesion:', error);
      }
    );
  }

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', { validators: [Validators.required], updateOn: 'change'}],
    password: ['', {validators: [Validators.required ], updateOn: 'change'}]
  })

}
