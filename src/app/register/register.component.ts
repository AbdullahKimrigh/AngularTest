import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    name: null,
    phone: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;

  constructor() { }
  ngOnInit(): void {
  }

  onSubmit(): void {
    // const { name, phone, password } = this.form;

    // this.registerService.register(name, phone).subscribe({
    //   next: (data: any) => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   error: (err: { error: { message: string; }; }) => {
    //     this.isSignUpFailed = true;
    //   }
    // });
  }
}