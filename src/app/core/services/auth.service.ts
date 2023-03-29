import { Injectable } from '@angular/core';

// Firebase Imports
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {first} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;
  uid: any;
  loginMsg: string = "";

  constructor(private fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  loginHandler(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signOutHandler() {
    return this.fireAuth.signOut();
  }

  public isLoggedIn() {
    return this.fireAuth.authState.pipe(first()).toPromise();
  }

}
