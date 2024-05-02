import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private isAuthenticatedFlag: boolean = false;
  private readonly username = 'test';
  private readonly password = '12344321';

  authenticate(username: string, password: string): boolean {
    this.isAuthenticatedFlag = (username === this.username && password === this.password);
    return this.isAuthenticatedFlag;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedFlag;
  }
}
