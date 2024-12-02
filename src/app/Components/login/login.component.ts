import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  print(): void {
    console.log(this.loginForm.valid);
    console.log(this.loginForm.value);
  }
  toRegister(): void {
    this.router.navigate(['/register']);
  }
  registerInfo = localStorage.getItem('registerInfo');
  parseRegisterInfo!: any;
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if (this.registerInfo) {
      this.parseRegisterInfo = JSON.parse(this.registerInfo);
      this.loginForm.get('email')?.setValue(this.parseRegisterInfo.email);
    }
  }
}
