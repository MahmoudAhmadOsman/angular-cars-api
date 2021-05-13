import { ToastrService } from 'ngx-toastr';
import { AuthoService } from './../services/autho.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authoService: AuthoService, toastr: ToastrService) {

  }


  canActivate() {
    if (this.authoService.isUserLoggedIn()) {
      return true
    } else {
      alert("BOBMER!, unauthorized route!");
      //this.router.navigateByUrl('login');
      window.location.href = "/login"

      // this.toastr.error('Unable to create new record!');
      return false;
    }
  }

}
