import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from '../clients/authentication.client';
//import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private tokenKey = 'token';
  
  constructor(
    private authenticationClient: AuthenticationClient,
//    public userService: UserService,
    private router: Router
  ) { }

  public login(username: string, password: string): void {
    this.authenticationClient.login(username, password).subscribe((token) => {
      localStorage.setItem(this.tokenKey, token);
      this.router.navigate(['/']);
    });
  }

  public register(email: string, password: string): void {
    this.authenticationClient
      .register(email, password)
      .subscribe((token) => {
        localStorage.setItem(this.tokenKey, token);
        this.router.navigate(['/']);
      });
  }

  public logout() {
//    this.authenticationClient
//      .logout(username)
//      .subscribe((token) => {
//        localStorage.removeItem(this.tokenKey)
//        this.router.navigate(['/']);
//      });
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/']);
//    return this.http.post(environment.apiUrl + '/api/logout', { }, httpOptions);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
  
}
