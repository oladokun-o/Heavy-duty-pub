import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GeneralService } from 'src/app/core/services/general.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(
    private contactService: GeneralService,
    private toastr: ToastrService
  ) {
    toastr.toastrConfig.preventDuplicates = true;
  }

  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    subject: new FormControl(null),
    message: new FormControl(null, Validators.required)
  });

  sending: boolean = false;
  submit() {
    if (this.form.invalid) {
      this.toastr.info("Please fill in all required fields")
    } else {
      this.sending = true;
      this.contactService.sendMessage(this.form.value).subscribe(
        res => {
          this.sending = false;
          this.toastr.success("Message sent successfully");
          this.form.reset();
        },
        err => {
          this.sending = false;
          this.toastr.error(err.error.message || "Error sending message")
        }
      )
    }
  }
}
