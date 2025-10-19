import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appForbiddenNames]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenNames, multi: true }]
})
export class ForbiddenNames implements Validator {
  private list = new Set(['admin', 'root']);

  validate(control: AbstractControl): ValidationErrors | null {
    return this.list.has((control.value ?? '').toLowerCase()) ? { forbiddenName: true } : null;
  }

}
