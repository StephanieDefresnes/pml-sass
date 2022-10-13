import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url + '/posts');
  }
}
