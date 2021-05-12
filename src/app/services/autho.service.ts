import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {

  constructor() { }

//Check if the user is authenticated or not
  isUserLoggedIn() {
    return false;
  }


}
