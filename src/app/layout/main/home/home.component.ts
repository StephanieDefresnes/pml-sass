import { Component, OnInit } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { HeaderService } from './../../../services/header.service';
import { PostService } from './../../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  posts:any;
  
  constructor(
    private headerService: HeaderService,
    private postService: PostService,
  ) {}

  ngOnInit() {
      
    this.headerService.updateTitlePage('Ze blog')
    
    this.postService.getPosts()
      .subscribe(response => {
        this.posts = response;
      })
  }

}
