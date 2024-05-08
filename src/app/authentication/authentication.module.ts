import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ButtonModule, PasswordModule, FormsModule, FloatLabelModule],
  exports: [LoginComponent],
})
export class AuthenticationModule {}
