import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isValidDate } from 'rxjs/internal/util/isDate';

export function emailValidator(): ValidatorFn {
  const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const isValidEmail = regExp.test(control.value);
    return isValidEmail ? null : { emailValidator: true };
  };
}
