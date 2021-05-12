import { UpdateComponent } from './components/update/update.component';
import { DetailsComponent } from './components/details/details.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
  },
  {
    path: "create", component: CreateComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: "details/:id/:name", component: DetailsComponent
  },
  {
    path: "update/:id/:name", component: UpdateComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: "login", component: LoginComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
