import { Router } from '@angular/router';
import { ApiService } from './../../services/Api/api.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {
  chatlists: Object;
  isSearchEnabled = false;
  userAvatarPlaceholder = '../../../assets/images/user-placeholder-2.png';
  userAvatar: any;
  searchText;


  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getChatList();
  }

  search(){
   this.isSearchEnabled = !this.isSearchEnabled;
  }

  getChatList(){
    this.apiService.getChatList()
    .subscribe(res => {
     this.chatlists = res['results'];
    // console.log(res);
    });
  }

  chat(){
    this.router.navigate(['chat']);

  }

  home(){
    alert('clicked')
  }

}
