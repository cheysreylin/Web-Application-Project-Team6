import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailComponent } from './detail/detail.component';
import { RecommendationComponent } from './detail/recommendation/recommendation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { SignupPopupComponent } from './signup-popup/signup-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    RecommendationComponent,
    NavbarComponent,
    FooterComponent,
    LoginPopupComponent,
    SignupPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
