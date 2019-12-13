import { Component } from '@angular/core';
import { AuthHelperService } from './auth-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public auth: AuthHelperService,
    private router: Router,
  ){
  }

}

