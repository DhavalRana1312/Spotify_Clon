import { Component, OnInit } from '@angular/core';
import { TopNavComponent } from '../../component/top-nav/top-nav.component';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HomeComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  loginForm!: FormGroup;
  signupForm!: FormGroup;
  myGroup!: FormGroup;


  // Store email
  submittedEmail: string = '';

  // Check form status
  activeForm: 'login' | 'signup' = 'signup';
  constructor(private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.myGroup = new FormGroup({
      login: this.loginForm,
      signup: this.signupForm
    });
  }

  toggleForm(form: 'login' | 'signup'): void {
    this.activeForm = form;
    if (form === 'login') {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['./signup']);
    }
  }

  onNavigateLogin() {
    this.signup();
  }

  signup() {
    if (this.signupForm.valid) {
      const email = this.signupForm.get('email')?.value;
      const number = this.signupForm.get('number')?.value;
      const password = this.signupForm.get('password')?.value;
      
      if (email =='dhavalrana1312@gmail.com' && number == 8238172562 && password == 'admin') {
        this.router.navigate(['']);
      } else {
        alert("Please Enter the Valid Details.");
      }
    }
  }



}
