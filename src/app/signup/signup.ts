import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SignupDto } from '../signup-dto';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  model: SignupDto = { name: '', email: '', password: '' };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('submit', this.model);
      form.resetForm();
    }
  }
}
