import { Component, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Books } from './books';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { SignupPopupComponent } from './signup-popup/signup-popup.component';

@Component({
  selector: 'lw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lost World Bookshop';
  @Input() books: Books[] = [];
  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor(private dialog: MatDialog){
  }
  
  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
  login() {
    this.dialog.open(LoginPopupComponent,{width: "40%", height: "70%"});
    console.log('click')
  }
  
}
