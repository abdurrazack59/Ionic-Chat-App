import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ControllersService {

  isLoading = false;

  constructor(
    private loadingController: LoadingController
  ) { }

  async presentLoading( ) {
    this.isLoading = true;
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      spinner: 'lines',
    //  duration: 5000,
      message: 'Loading Please Wait...',
      translucent: true,
      backdropDismiss: false
    }).then(a => {
      a.present().then(() => {
        console.log('Loading presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('Loading dismissed'));
  }

}
