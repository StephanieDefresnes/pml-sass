import { Component, OnInit } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
  pathLogo:any = './../assets/img/logo.png';
  
  title = 'playmalife';
  page = 'Ze blog';
  
  posts:any;
  
  constructor(library: FaIconLibrary, public authService: AuthenticationService) {
    library.addIcons(faSignInAlt,faUserEdit);
  }  

  ngOnInit() {}
}
