import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.sass']
})
export class RegisterPageComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    this.authenticationService.register(
      this.registerForm.get('email')!.value,
      this.registerForm!.get('password')!.value
    );
  }

}
