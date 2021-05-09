import { UpdateComponent } from './components/update/update.component';
import { DetailsComponent } from './components/details/details.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
  },
  {
    path: "create", component: CreateComponent
  },
  {
    path: "details/:id/:name", component: DetailsComponent
  },
  {
    path: "update/:id/:name", component: UpdateComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
