import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  const regExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return (control: AbstractControl): ValidationErrors | null => {
    const isValidPassword = regExp.test(control?.value);
    return isValidPassword ? null : { passwordValidator: true };
  };
}
