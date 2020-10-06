import { ModalPage } from './../modal/modal.page';
import { ApiService } from './../../services/Api/api.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  userData: any;

  constructor(
    private actionSheetController: ActionSheetController,
    private apiService: ApiService,
    private modalController: ModalController,
    private domSanitizer: DomSanitizer
  ) { }

  userAvatar;
  userAvatarPlaceholder = '../../../assets/images/user-placeholder-2.png';
  username = '';

  ngOnInit() {
    this.getUserData();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose Profile Photo',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          console.log('camera clicked');
        }
      }, {
        text: 'Gallery',
        icon: 'image',
        handler: () => {
          console.log('gallery clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  getUserData(){
    this.apiService.getUserData().subscribe((res) => {
      this.userData = res['results'];
      this.username = res['results'][0].name.first;
     // this.userAvatar = res['results'][0].picture.large;
      this.userAvatar = this.domSanitizer.bypassSecurityTrustStyle(`url(${res['results'][0].picture.large})`);
     // console.log(res['results'][0].picture.large);
      if (this.userAvatar === '' || this.userAvatar === undefined) {
        this.userAvatar = this.userAvatarPlaceholder;
      }
    });
  }

  async presentModal() {
    const myModal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'custom-modal'
    });
    return await myModal.present();
  }

}
