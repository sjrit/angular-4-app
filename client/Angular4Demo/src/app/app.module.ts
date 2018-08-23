import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RestApiService } from './rest-api.service';
import { DataService } from './data.service';
import { AuthGuardService } from './auth-guard.service';

import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ControlMessages } from './validators/control-messages';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Toastr } from './toastr/toastr';
import {KSSwiperModule} from 'angular2-swiper';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ControlMessages,
    MessageComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  exports:[ControlMessages],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgbModule.forRoot(),
    KSSwiperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [RestApiService, DataService, AuthGuardService,ToastrService,Toastr],
  bootstrap: [AppComponent],
})
export class AppModule {}
