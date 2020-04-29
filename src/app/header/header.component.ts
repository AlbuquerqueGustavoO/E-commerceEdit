import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/security/login/login.service';
import { User } from '../../app/security/login/user.model'


@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  user(): User {
    return this.loginService.user
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn()
  }

  login() {
    this.loginService.handleLogin()
  }

  logout() {
    this.loginService.logout()
  }

}
