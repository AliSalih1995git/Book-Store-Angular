import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private rourte: Router,
    private toastr: ToastrService
  ) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  get AllControles() {
    return this.loginForm.controls;
  }

  onSubmit(value: any) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const formData = this.loginForm.value;
    this.authService.login(formData).subscribe((res) => {
      localStorage.setItem('userToken', res.token);
      this.toastr.success(res.message);
      this.rourte.navigateByUrl('/');
    });
  }
}
