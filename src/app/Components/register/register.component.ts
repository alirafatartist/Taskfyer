import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private router: Router) {}
  registerForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  print(): void {
    console.log(this.registerForm.valid);
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.toLogin();
      localStorage.setItem('registerInfo',JSON.stringify(this.registerForm.value))
    }
  }
  toLogin(): void {
    this.router.navigate(['/login']);
  }
}
