import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'PathFinder';

  constructor(public dialog: MatDialog) { }

  //Input Dialogs 
  openWindowDialog(): void { const dialogRef = this.dialog.open(WindowsInputComponent, { width: '350px', height: '500px' }); }
  openDoorDialog(): void { const dialogRef = this.dialog.open(DoorsInputComponent, {}); }
  openBridgeDialog(): void { const dialogRef = this.dialog.open(BridgeInputComponent, {}); }
  openGroundDialog(): void { const dialogRef = this.dialog.open(GroundInputComponent, {}); }

}

