import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(environment.apiUrl+ '/posts');
  }
}
