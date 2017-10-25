import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthProvider {

  constructor(private afAuth :  AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

 

// Devuelve la session
 get Session(){
  return this.afAuth.authState;
 }

  // Logout de usuario
  logout(): any{
    this.afAuth.auth.signOut();
  }

}