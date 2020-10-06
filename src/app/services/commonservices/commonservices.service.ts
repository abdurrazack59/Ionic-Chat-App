import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class CommonservicesService {

  constructor(
    private nativeStorage: NativeStorage
  ) { }

  isDarkModeEnabled: boolean;

  setItemInStorage(key, value){
    this.nativeStorage.setItem(key, value)
   .then(() =>{
     console.log('Stored item!');
    },
   (error) => console.error('Error storing item', error));
  }

  getItemInStorage(key){
    return this.nativeStorage.getItem(key);
   }

   setDarkMode(value: boolean){
     this.isDarkModeEnabled = value;
   }

   getDarkMode(){
     return this.isDarkModeEnabled;
   }

}
