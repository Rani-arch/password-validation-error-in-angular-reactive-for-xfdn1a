import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  FormControl,
} from '@angular/forms';
import { PasswordStrengthValidator } from './password-strength.validators';

function passwordMatchValidator(Pwd: string): ValidatorFn {
  return (control: FormControl) => {
    console.log(control);
    if (!control || !control.parent) {
      return null;
    }
    return control.parent.get(Pwd).value === control.value
      ? null
      : { mismatch: true };
  };
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public NameForm: FormGroup;
  // Pwd: any;

  constructor(fb: FormBuilder) {
    this.NameForm = fb.group({
      Pwd: [
        null,
        Validators.compose([Validators.required, PasswordStrengthValidator]),
      ],
      confirmPwd: [
        null,
        Validators.compose([
          Validators.required,
          PasswordStrengthValidator,
          passwordMatchValidator('Pwd'),
        ]),
      ],
    });
  }
  ngOnit() {}

  // password(formGroup: FormGroup) {
  //   const { value: Pwd } = formGroup.get('password');
  //   const { value: confirmPwd } = formGroup.get('confirmpassword');
  //   return Pwd === confirmPwd ? null : { PwdNotMatch: true };
  // }
}
