import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ForbiddenNames } from '../forbidden-names';
import { SignupDto } from '../signup-dto';
import { SignupService } from '../signup-service';

@Component({
  selector: 'app-signup-validator',
  imports: [FormsModule, ForbiddenNames],
  templateUrl: './signup-validator.html',
  styleUrl: './signup-validator.css'
})
export class SignupValidator {
  model: SignupDto = { name: '', email: '', password: '' };
  private signupService = inject(SignupService);

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('submit', this.model);
      this.signupService.postSignup(this.model).subscribe({
        next: res => {
          // Do something on success
          if (res.success) {
            console.log(res);
          }
        },
        error: err => {
          console.error(err);
        }
      });
      form.resetForm();
    }
  }
}
