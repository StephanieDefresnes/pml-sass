import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { CanActivate } from '@angular/router';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';

//const httpOptions = {
//  headers: new HttpHeaders({'Content-Type': 'application/json' })
//}
     

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    public authService: AuthenticationService
  ) {}

//  getCurrent(): Observable<any> {
//    return this.http.get(environment.apiUrl + '/api/user', { responseType: 'text' });
//  }
  
//  canActivate(): boolean {  
//    if (
//        this.authService.isLoggedIn()) {
//      this.router.navigate(['/login']);
//    }
//    return true;
//  }
  
  
  getCurrent(): Observable<any> {
      
    const token = this.authService.getToken();
    console.log(token);
  
//    const httpOptions = {
      const headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
        .set('content-type', 'application/json');
//        .set('Access-Control-Allow-Origin', '*');
//      const headers = new HttpHeaders({
//          Authorization: `Bearer ${this.authService.getToken()}`,
//          'Content-Type': 'application/json',
//          'Access-Control-Allow-Origin': '*',
//      });
//    };
//    let token = this.authService.getToken();
//    if ( user ) {
//    return this.http.post(environment.apiUrl + '/api/logout', { }, httpOptions);
      return this.http.get(environment.apiUrl + '/api/user', { 'headers': headers } );
//    }
//    return null;
  }
  
}
