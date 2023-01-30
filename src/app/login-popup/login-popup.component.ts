import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupPopupComponent } from '../signup-popup/signup-popup.component';

@Component({
  selector: 'lw-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent {
  constructor(private dialog: MatDialog){

  }
  signup(){
    this.dialog.open(SignupPopupComponent, {height: "85%", width: "40%"});
  }
}
