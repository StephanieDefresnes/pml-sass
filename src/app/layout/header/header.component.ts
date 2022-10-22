import { Component, OnInit, AfterViewInit, ViewChildren } from '@angular/core';

import { AuthenticationService } from './../../services/authentication.service';
import { HeaderService } from './../../services/header.service';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
    
  pathLogo:any = './../../assets/img/logo.png';
  titleSite = 'playmalife';
  
  constructor(
    library: FaIconLibrary,
    public authService: AuthenticationService,
    private headerService: HeaderService,
  ){
    library.addIcons(faSignInAlt,faSignOutAlt,faUserEdit);
  }
  
  titlePage = this.headerService.titlePage

  ngOnInit(): void {}
  
  logout(): void {
    this.authService.logout();
  }

}
