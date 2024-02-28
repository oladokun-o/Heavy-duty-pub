import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {
    toastr.toastrConfig.preventDuplicates = true;
  }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(
      res => {
        this.toastr.success(res.message, "Login Successful");
        this.router.navigate(['/dashboard']);
      }
    )
  }

  loggingIn: boolean = false;

  confirmLogin(): void {
    this.loggingIn = true;
    if (this.form.invalid) {
      this.toastr.info("Please fill in the required fields to login");
      this.loggingIn = false;
    } else {
      this.proceed();
    }
  }

  proceed(): void {
    this.authService.login(this.form.value).subscribe(
      res => {
        this.loggingIn = false;
        this.toastr.success(res.message, "Login Successful");
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.loggingIn = false;
        this.toastr.error(err.error.message, "Login failed");
      }
    )
  }

}
