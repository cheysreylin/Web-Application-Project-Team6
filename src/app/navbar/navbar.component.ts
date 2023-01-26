import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'lw-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggle:boolean = false;
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
}
