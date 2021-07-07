import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {
  
  constructor(private router: Router) {}
  
  canActivate(): boolean {
    console.log(sessionStorage.getItem("serverResult"));
    const val = Boolean(sessionStorage.getItem("serverResult"));
    if (sessionStorage.getItem("serverResult") == "cat") {
      return true;
    } else {
      this.router.navigate(["/signin"]);
      return false; /* This is unnecessary as redirecting will 
      happen before this line, however, it is necessary for this
      function as a boolean value needs to be returned */
    }
  }
}
