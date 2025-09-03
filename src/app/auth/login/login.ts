import { Component, inject, NgZone } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  fb: FormBuilder = inject(FormBuilder);

  registerForm: FormGroup = this.initForm();

  ngOnInit() {}

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required, Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      date: [''],
      address: this.fb.group({
        country: [''],
        city: [''],
      }),
      skills: this.fb.array([this.fb.control('football')]),
      accept: [''],
    });
  }

  submit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
    }
    console.log(this.registerForm.value);
  }
}
