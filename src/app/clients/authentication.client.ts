import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationClient {
    constructor(private http: HttpClient) {}

    public login(username: string, password: string): Observable<string> {
        return this.http.post(
            environment.apiUrl + '/api/login_check',
            {
                username: username,
                password: password,
            },
            { responseType: 'text' }
        );
    }

    public register(
        email: string,
        password: string
    ): Observable<string> {
        return this.http.post(
            environment.apiUrl + '/register',
            {
                email: email,
                password: password,
            },
            { responseType: 'text' }
        );
    }
}