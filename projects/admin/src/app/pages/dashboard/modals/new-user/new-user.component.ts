import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private toastr: ToastrService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void { }

  loading: boolean = false;

  confirm(): void {
    this.loading = true;
    if (this.form.invalid) {
      this.toastr.info("Please fill in the required fields to login");
      this.loading = false;
    } else {
      this.activeModal.close(this.form.value);
    }
  }
}
