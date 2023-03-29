import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMsg: string = '';
  error: { name: string, message: string } = { name: " ", message: " " };


  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ]))
  });

  constructor(private authService: AuthService, private router: Router) {
  }


  ngOnInit(): void {
  }

  signIn(email: string, password: string) {
    this.authService.loginHandler(email, password).then((data) => {
      this.authService.uid = data.user.uid;
      this.router.navigate(['/login/dashboard']);
    }).catch((error) => {
      console.log(error['code']);
      if (error['code'] == 'auth/wrong-password') {
        this.errorMsg = "The password is invalid or the user does not have a password!";
      }
      else if (error['code'] == 'auth/invalid-email') {
        this.errorMsg = "Invalid email entered!";
      }
      else if (error['code'] == 'auth/user-disabled') {
        this.errorMsg = "The user has been temporarily blocked due to many failed logins!";
      }
      else if (error['code'] == 'auth/user-not-found') {
        this.errorMsg = "There is no user record corresponding to this identifier.";
      }
      else if (error['code'] == 'auth/too-many-requests') {
        this.errorMsg = "Access to this account has been temporarily disabled due to many failed logins!";
      }
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (!this.loginForm.invalid) {
      let emailInput = this.loginForm.get('email').value;
      let passwordInput = this.loginForm.get('password').value;

      this.signIn(emailInput, passwordInput);
    }
  }
}
