import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header: string = 'Header';
  headers: any[] = ['admin', 'panel', 'results', 'mainpage'];
  show: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.show = false;
        this.headers.forEach(i => {
          if ((window.location.href).includes(i)) {
            this.show = true;
            this.header = i;
          }
        })
        switch (this.header) {
          case 'admin':
            this.header = 'Administration'
            break;
          case 'panel':
            this.header = 'User Panel'
            break;
          case 'results':
            this.header = 'Results'
            break;
          case 'mainpage':
            this.header = 'PathFinder'
            break;
          default:
            this.header = 'Header to be updated'
            break;
        }

      }
    });
  }


}
