import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddressDto } from '../address-dto';

@Component({
  selector: 'app-address',
  imports: [FormsModule],
  templateUrl: './address.html',
  styleUrl: './address.css'
})
export class Address {
  model: AddressDto = {
    street: '',
    city: '',
    zip: '',
    extraLines: [] as string[],
  };

  addLine() {
    this.model.extraLines.push('');
  }

  removeLastLine() {
    this.model.extraLines.pop();
  }

  save() {
    console.log('Saved', this.model);
  }
}
