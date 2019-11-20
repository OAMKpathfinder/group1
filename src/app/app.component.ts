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
  title = 'PathFinder';

  title1: string = 'Ground';
  subTitle1 : string = 'Floor';
  el1: string = 'el1';
  type1: string = "ground";

  title2: string = 'Doors';
  subTitle2 : string = 'door';
  el2: string = 'el2';
  type2: string = "door";

  title3: string = 'Bridge';
  subTitle3 : string = 'values';
  el3: string = 'el3';
  type3: string = "bridge";

  title4: string = 'Windows';
  subTitle4 : string = 'window';
  el4: string = 'el4';
  type4: string = "window";

  
  lorem ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  //breadcrumb required 2 Inputs, id for referring the div "height" (from top and next div top?)
  //phase for used to name the breadcrumb and referring the li to assign/remove active class
  ids: string[] = [this.el1,this.el2,this.el3,this.el4];
  phases: string[] = [this.title1,this.title2,this.title3,this.title4];


  constructor(public dialog: MatDialog) { }


  //Input Dialogs 
  openWindowDialog(): void {
    const dialogRef = this.dialog.open(WindowsInputComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ', result);
    });
  }
  openDoorDialog(): void {
    const dialogRef = this.dialog.open(DoorsInputComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ', result);
    });
  }
  openBridgeDialog(): void {
    const dialogRef = this.dialog.open(BridgeInputComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ', result);
    });
  }
  openGroundDialog(): void {
    const dialogRef = this.dialog.open(GroundInputComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ', result);
    });
  }
}

