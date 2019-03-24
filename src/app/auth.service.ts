import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  uri = 'http://localhost:5000/api';
  token;

  constructor(private http: HttpClient, private router: Router) { }

  login(Email: string, Password: string) {
    this.http.post(this.uri + '/authenticate', {email: Email, password: Password})
      .subscribe((resp: any) => {

        this.router.navigate(['user-details']);
        localStorage.setItem('auth_token', resp.token);
      });
      }

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

}
