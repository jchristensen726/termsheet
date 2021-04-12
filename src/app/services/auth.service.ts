import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  }

  async login(email: string, password: string): Promise<void> {   
    
    this.isAuthenticated.next(true);
  }  

  async logout(redirect: string): Promise<void> {
    try {
      this.isAuthenticated.next(false);
      await this.router.navigate([redirect]);
    } catch (err) {
      console.error(err);
    }
  }
}