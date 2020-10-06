import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  dummyUserDataURL = 'https://randomuser.me/api/';

    getUserData(){
      return this.httpClient.get(this.dummyUserDataURL);
    }

    getChatList() {
      return this.httpClient.get('https://randomuser.me/api/?results=15');
    }

}
