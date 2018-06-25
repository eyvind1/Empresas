import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoginGuardGuard implements CanActivate {
  canActivate(){

    console.log( 'Paso por el login guard' );
    return true;
  }
}
