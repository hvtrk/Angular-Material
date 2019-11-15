import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('emailFocus', {static: true}) emailName: ElementRef;
  loginForm: FormGroup;
  hide = true;

  getErrorMessage(feild, error, message) {
    console.log(this.loginForm.controls[feild]);
    if (this.loginForm.controls[feild].dirty) {
      return this.loginForm.get(feild).hasError('required') ? 'You must enter a value' : 
        this.loginForm.controls[feild].hasError(error) ? `Not valid ${message}`  : '';
    }
  }
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  signup () {
    console.log('signup');
  }
  login () {
    console.log('login');
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(255)]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(8)
        ]
      ]
    });
  }

  ngAfterViewInit() {
    this.emailName.nativeElement.focus();
  }

  onSubmit() {
    console.log(this.loginForm);
  }

}
