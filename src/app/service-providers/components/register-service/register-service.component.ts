import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.scss'],
})
export class RegisterServiceComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    phone: new FormControl(null, Validators.required),
    description: new FormControl(''),
    email: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}

  submit(){
   
  }
}
