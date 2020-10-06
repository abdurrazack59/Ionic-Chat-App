import { ControllersService } from './../../services/controllers.service';
import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.page.html',
  styleUrls: ['./social-login.page.scss'],
})
export class SocialLoginPage implements OnInit {

  loading: any;


  constructor(
    private controllersService: ControllersService,
    private router: Router,
    private fb: Facebook,
    private fireAuth: AngularFireAuth,

  ) { 
  }

  async ngOnInit() {

  }

  async fbLogin() {
    this.controllersService.presentLoading();
    this.fb.login(['email'])
      .then((response: FacebookLoginResponse) => {
        console.log('fb response on email: ' + JSON.stringify(response));
        this.onFbLoginSuccess(response);
        console.log(response.authResponse.accessToken);
      }).catch((error) => {
        this.controllersService.dismissLoading();
        this.onFbLoginError(error);
      });
  }
  onFbLoginSuccess(res: FacebookLoginResponse) {
   // const { token } = res;
    const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    this.fireAuth.auth.signInWithCredential(credential)
      .then((response) => {
        this.controllersService.dismissLoading();
        console.log('login with firebase: ' + JSON.stringify(response));
        this.router.navigate(['/user-profile']);
      });

  }

  onFbLoginError(err) {
    console.log('Error loggin in fb: ' + JSON.stringify(err));
  }


}
