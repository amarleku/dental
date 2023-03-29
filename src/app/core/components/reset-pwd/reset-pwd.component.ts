import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.scss']
})
export class ResetPwdComponent implements OnInit {

  resetForm = new UntypedFormGroup({
    password: new UntypedFormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ])),
    repeatPassword: new UntypedFormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ]))
  });

  errorMsg: string = "";

  constructor(private fireAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  get password() {
    return this.resetForm.get('password');
  }

  get repeatPassword() {
    return this.resetForm.get('repeatPassword');
  }

  onSubmit() {
    let newPassword = this.password.value;
    let repeatPassword = this.repeatPassword.value;

    if (newPassword !== repeatPassword) {
      this.errorMsg = "Passwords do not match!";
    } else {
      this.errorMsg = "";
      this.fireAuth.authState.subscribe((data) => {
        data.updatePassword(repeatPassword).then(() => {
          console.log(this.authService.authState);
          this.router.navigate(['/login/dashboard']).then(() => {
          });
        });
      });
    }
  }

}
