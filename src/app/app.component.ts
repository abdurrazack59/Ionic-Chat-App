import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonservicesService } from './services/commonservices/commonservices.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private commonservicesService: CommonservicesService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.updateIfDarkOrLightMode();
    });
  }

  updateIfDarkOrLightMode(){
    this.commonservicesService.getItemInStorage('isDarkMode')
    .then((data) => {
      console.log('value of isDarkMode: ' + data);
      if (data === 'true') {
        document.body.classList.toggle('dark', true);
        this.commonservicesService.setDarkMode(true);
      } else {
        document.body.classList.toggle('dark', false);
        this.commonservicesService.setDarkMode(false);
      }
    }, (error) => {
      console.log('error in getting value from storage: ' + error);
    });
  }


}
