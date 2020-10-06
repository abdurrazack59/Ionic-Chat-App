import { Router } from '@angular/router';
import { ControllersService } from './../../services/controllers.service';
import { Platform } from '@ionic/angular';
import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio/ngx';



@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
})
export class PaypalPage implements OnInit {


  constructor(
    private paypal: PayPal,
    private platform: Platform,
    private controllersService: ControllersService,
    private fingerprintAIO: FingerprintAIO,
    private router: Router,
  ){}


  paymentAmount = '3.33';
  currencyIcon = '$';
  paymentSuccess = false;
  paymentFailure = false;

  paypalClientId = {
    PayPalEnvironmentProduction: environment.PaypalClientIdProduction,
    PayPalEnvironmentSandbox: environment.PaypalClientIdSandbox
  };

  paymentDetails = {
    paymentAmount: this.paymentAmount,
    currency: environment.PayPalCurrency,
    description: 'Description',
    intent: 'sale'
  };

 
  ngOnInit() {
  }

  // Initiate PayPal Payment

  payWithPaypal() {
    this.platform.ready().then(() => {
      this.initializePayment();
    });
  }

  initializePayment(){
    this.platform.ready().then(() => {
    this.controllersService.presentLoading();
    this.paypal.init(this.paypalClientId).then((res) => {
      console.log('init res: ' + JSON.stringify(res));
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.paypal.prepareToRender(environment.PayPalEnvironment, new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        // payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then((res) => {
        console.log('prepareToRender res: ' + JSON.stringify(res));
        // tslint:disable-next-line: max-line-length
        const payment = new PayPalPayment(this.paymentDetails.paymentAmount, this.paymentDetails.currency, this.paymentDetails.description, this.paymentDetails.intent);
        this.paypal.renderSinglePaymentUI(payment).then((paymentSuccess) => {
          this.controllersService.dismissLoading();
          this.paymentSuccess = true;
          console.log(paymentSuccess);
        //  alert('Payment Successfull');
        }, (paymentFailure) => {
          this.controllersService.dismissLoading();
          this.paymentFailure = true;
          console.log(paymentFailure);
        //  alert(JSON.stringify(paymentFailure));
        });
      }, (err) => {
        this.controllersService.dismissLoading();
        console.log(err);
      });
    }, (err) => {
      this.controllersService.dismissLoading();
      console.log(err);
    });
  });
  }

  isFingerprintAvailable(){
    this.fingerprintAIO.isAvailable().then((result) => {
      if (result) {
        console.log('Fingerprint available ' + result);
        this.authenticateFingerprint(result);
      }
    }, (error) => {
      console.log('Fingerprint error: ' + JSON.stringify(error));
    });
  }

  authenticateFingerprint(authenticateType: any){
    const options: FingerprintOptions = {
      description: `Authenticate using ${authenticateType}`,
      subtitle: 'Please authenticate to proceed'
    };
    this.fingerprintAIO.show(options).then((res) => {
     // this.initializePayment();
      console.log('Authentication successful: ' + JSON.stringify(res));
    }, (error) => {
      this.router.navigate(['home']);
      console.log('Authentication invalid ' + JSON.stringify(error));
    });
  }

}
