import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService,private router :Router ) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    /*alert('Le guard a bien été mis en place')
    return true*/
    let url:string = state.url
    return this.checkLogin(url)
  }
  checkLogin(url:string):boolean{
    if(this.authService.isLoggedIn){
      return true
    }
    this.authService.redirectUrl = url
    this.router.navigate(['/login'])
    return false
  }
}
