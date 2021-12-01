import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //variables
  isLoggedIn:boolean=false
  redirectUrl?:string
  constructor() { }
  //une methode de connexion
  login(name:string,password:string):Observable<boolean>{
    //Faites votre appel à un service d'authentification...
    const isLoggedIn = (name === 'pikachu' && password === 'pikachu');
   
    return of(true).pipe(
      delay(1000),
      tap(val=>this.isLoggedIn = isLoggedIn)
    )
  }
  logout():void{
    this.isLoggedIn = false
  }
  /*setMessage(){
    this.message = this.authService.isLoggedIn
  }*/
}
