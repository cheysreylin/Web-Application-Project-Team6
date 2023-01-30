import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPopupComponent } from '../login-popup/login-popup.component';

@Component({
  selector: 'lw-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggle:boolean = false;
  constructor(private dialog: MatDialog){
  }

  togglemanu(){
    this.toggle = !this.toggle;
  }
  public getScreenWidth: any;
  public getScreenHeight: any;
  
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
    this.dialog.open(LoginPopupComponent);
    console.log('click')
  }
}
