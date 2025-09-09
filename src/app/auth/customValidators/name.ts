import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = 'Abdelaziz';
    return control.value?.toLowerCase() === forbidden.toLowerCase()
      ? { nameValidator: { value: control.value } }
      : null;
  };
}
