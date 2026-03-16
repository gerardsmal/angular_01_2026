import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  private isLogged= true;
  private isAdmin = true;

  constructor(){}

  isAutentificated(){
    return this.isLogged;
  }

  isRoleAdmin(){
    return this.isAdmin;
  }
}
