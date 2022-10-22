import { Component, OnInit } from '@angular/core';

import { HeaderService } from './../../../services/header.service';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  title = 'profil'
  user:any
  
  constructor(
    private headerService: HeaderService,
    private userService: UserService,
  ) {}  

  ngOnInit() {
      
    this.headerService.updateTitlePage(this.title)
    
    //401
//    this.userService.getCurrent()
//      .subscribe(response => {
//        this.user = response;
//      });
  }


}
