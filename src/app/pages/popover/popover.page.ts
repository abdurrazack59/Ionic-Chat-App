import { Router } from '@angular/router';
import { CommonservicesService } from './../../services/commonservices/commonservices.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  dark = false;

  constructor(
    private commonservicesService: CommonservicesService,
    private popoverController: PopoverController,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkIfDarkOrLightMode();
  }

  ionViewWillEnter(){
  }

  ionViewDidLoad() {
  }

  updateDarkMode() {
    if (this.dark) {
      this.dark = true;
      document.body.classList.toggle('dark', true);
      this.commonservicesService.setItemInStorage('isDarkMode', 'true');
      this.commonservicesService.setDarkMode(true);
    } else {
      this.dark = false;
      document.body.classList.toggle('dark', false);
      this.commonservicesService.setItemInStorage('isDarkMode', 'false');
      this.commonservicesService.setDarkMode(false);
    }
  }

  checkIfDarkOrLightMode(){
  this.dark = this.commonservicesService.getDarkMode();
  }

  navigatePage(page: any){
    this.popoverController.dismiss();
    this.router.navigate([page]);
  }

}
