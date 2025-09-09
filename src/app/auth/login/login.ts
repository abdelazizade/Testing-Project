import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { Component, inject, NgZone } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { nameValidator } from '../customValidators/name';
import { passwordValidator } from '../customValidators/password';
import { emailValidator } from '../customValidators/email';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  providers: [DatePipe],
})
export class Login {
  fb: FormBuilder = inject(FormBuilder);
  datePipe = inject(DatePipe);

  registerForm = this.initForm();

  initForm() {
    return this.fb.group({
      name: ['', [Validators.required, nameValidator()]],
      phone: ['', Validators.required],
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required], [passwordValidator()]],
      date: ['', Validators.required],
      address: this.fb.group({
        country: [''],
        city: ['', Validators.required],
      }),
      skills: this.fb.array([this.fb.control('', Validators.required)]),
    });
  }

  getError(control: string) {
    return this.registerForm.get(control);
  }

  getErrorSkill(index: number) {
    return this.getskills.at(+index) as FormControl | null;
  }

  get getskills() {
    return this.registerForm.get('skills') as FormArray;
  }

  addSkill() {
    this.getskills.push(this.fb.control('', Validators.required));
  }

  submitForm() {
    const date = this.registerForm.get('date')?.value;
    const handleDate = this.datePipe.transform(date, 'dd/MM/yyyy');

    this.registerForm.patchValue({ date: handleDate });

    // if(this.registerForm.val)
    // console.log(this.registerForm.value);
  }

  isFormValid(){
    // console.log(!!this.registerForm.valid);
    return !!this.registerForm.valid
  }
}
