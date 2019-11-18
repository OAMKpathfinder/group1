import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LandingModalComponent } from './landing-modal/landing-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PathFinder';

  constructor(public matDialog: MatDialog) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(LandingModalComponent, dialogConfig);
  }
}
