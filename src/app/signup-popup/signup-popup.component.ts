import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginPopupComponent } from '../login-popup/login-popup.component';

@Component({
  selector: 'lw-signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.css']
})
export class SignupPopupComponent {
  constructor(private dialog:MatDialog){}
  login() {
    this.dialog.open(LoginPopupComponent,{width: "40%", height: "70%"});
    console.log('click')
  }
}
