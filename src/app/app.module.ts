import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { FooterComponent } from './components/footer/footer.component';
import { DescShortnerPipe } from './pipes/desc-shortner.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { CheckAvailabilityComponent } from './components/check-availability/check-availability.component';
 




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateComponent,
    DetailsComponent,
    HomeComponent,
    UpdateComponent,
    FooterComponent,
    DescShortnerPipe,
    SearchFilterPipe,
    CheckAvailabilityComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    
    ToastNoAnimationModule.forRoot(),//Toast notification
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
