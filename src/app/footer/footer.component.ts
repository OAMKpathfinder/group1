import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  headers: any[] = ['admin', 'panel', 'results', 'mainpage'];
  show: boolean = false;

  constructor(private router: Router) {

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.show = false;
        this.headers.forEach(i => {
          if ((window.location.href).includes(i)) {
            this.show = true;
          }
        })
      }
    });
  }


}
