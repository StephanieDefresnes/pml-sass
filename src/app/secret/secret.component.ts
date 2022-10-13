import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.sass']
})
export class SecretComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}
  
  logout(): void {
    this.authenticationService.logout();
  }

}
