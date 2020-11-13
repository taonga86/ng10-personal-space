import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  result;
  logRes;
  currentUser:firebase.User;

  constructor(private afAuth:AngularFireAuth) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user=>{
      this.currentUser=user;
      console.log(this.currentUser.displayName);
    })
  }
  
  async loginWithGoogle(){
    try {
      this.result=await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      await console.log(this.result);
    }catch(err){
      console.error(err)
    }
  }
  async signOut(){
    this.logRes=await this.afAuth.signOut();
    console.log(this.result);
  }
}
