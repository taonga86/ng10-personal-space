import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import from firebase/app instead of from firebase: good or bad idea?
import firebase from 'firebase/app';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  result;
  currentUser: firebase.User;
  userSub: Subscription;

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit(): void {
    this.userSub = this.afAuth.authState.subscribe((user) => {
      this.currentUser = user;
    });
  }

  async loginWithGoogle() {
    try {
      this.result = await this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      console.log(this.result);
    } catch (err) {
      console.error(err);
    }
  }

  async signOut() {
    await this.afAuth.signOut();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
