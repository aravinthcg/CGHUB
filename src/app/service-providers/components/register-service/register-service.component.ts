import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.scss'],
})
export class RegisterServiceComponent implements OnInit {
  submitted = false;
  durationInSeconds = 3;
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(10),
    ]),
    description: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this._snackBar.open('Registration success', 'Done', {
        duration: this.durationInSeconds * 1000,
      });
    }
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }
}
