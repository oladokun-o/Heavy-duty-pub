import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../core/interfaces/auth.interface';

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

  get user(): User | null {
    return JSON.parse(sessionStorage.getItem('admin') as string);
  }

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {
    toastr.toastrConfig.preventDuplicates = true;
  }

  ngOnInit(): void { }

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
