import { Component, OnInit } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
//  globalFonts:any = './../assets/fonts/font-file.css';
  pathLogo:any = './../assets/img/logo.png';
//  globalStyles:any = './../assets/css/styles.css';
//  iconStyles:any = './../assets/css/icon.css';
  
  title = 'playmalife';
  page = 'Ze blog';
  
  posts:any;
  
  constructor(private service:PostService) {}  

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
  }
}
