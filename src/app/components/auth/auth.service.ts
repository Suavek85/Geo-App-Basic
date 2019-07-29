import { AuthData } from "./auth.data.model";
import { User } from "./user.model";
import { Subject } from "rxjs/Subject";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()

export class AuthService {
  
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router, private afAuth: AngularFireAuth) {

  }

  registerUser(authData: AuthData) {
    //this.user = {
     // email: authData.email,
      //userId: Math.round(Math.random() * 1000).toString()
   // };
   this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
   .then(result => {
     console.log(result);
     this.authSuccessfully()
   })
   .catch(error => { console.log('Theres been an error')})

   
  }

  signIn(authData: AuthData) {
   // this.user = {
     // email: authData.email,
     // userId: Math.round(Math.random() * 1000).toString()
    //};
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
   .then(result => {
     console.log(result);
     this.authSuccessfully()
   })
   .catch(error => { console.log('Theres been an error')})

  }

  signOut() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/signin'])
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/dashboard'])
  }
}
