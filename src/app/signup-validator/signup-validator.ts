import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ForbiddenNames } from '../forbidden-names';
import { SignupDto } from '../signup-dto';

@Component({
  selector: 'app-signup-validator',
  imports: [FormsModule, ForbiddenNames],
  templateUrl: './signup-validator.html',
  styleUrl: './signup-validator.css'
})
export class SignupValidator {
  model: SignupDto = { name: '', email: '', password: '' };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('submit', this.model);
      form.resetForm();
    }
  }
}
