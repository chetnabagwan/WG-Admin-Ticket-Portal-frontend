import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string;
  password: string;

  @ViewChild('loginForm') form: NgForm;


  onLogin() {
    // login logic later
    console.log(this.form.value.username);
    console.log(this.form.value.password);
  }
}
