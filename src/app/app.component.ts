import { Component } from '@angular/core';
import { WindowsInputComponent } from './windows-input/windows-input.component';
import { DoorsInputComponent } from './doors-input/doors-input.component';
import { BridgeInputComponent } from './bridge-input/bridge-input.component';
import { GroundInputComponent } from './ground-input/ground-input.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  el2: string = 'el2';
  el3: string = 'el3';

  title1: string = 'PathFinder1';
  title2: string = 'PathFinder2';
  title3: string = 'PathFinder3';

  subTitle1: string = 'subTitle1';
  subTitle2: string = 'subTitle2';
  subTitle3: string = 'subTitle3';

  lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  //breadcrumb required 2 Inputs, id for referring the div "height" (from top and next div top?)
  //phase for used to name the breadcrumb and referring the li to assign/remove active class
  ids = ["el1", "el2", "el3"];
  phases = ["phase1", "phase2", "phase3"];

  title = 'PathFinder';

  constructor(public dialog: MatDialog) { }

  //Input Dialogs 
  openWindowDialog(): void { const dialogRef = this.dialog.open(WindowsInputComponent, { width: '350px', height: '500px' }); }
  openDoorDialog(): void { const dialogRef = this.dialog.open(DoorsInputComponent, {}); }
  openBridgeDialog(): void { const dialogRef = this.dialog.open(BridgeInputComponent, {}); }
  openGroundDialog(): void { const dialogRef = this.dialog.open(GroundInputComponent, {}); }

}

