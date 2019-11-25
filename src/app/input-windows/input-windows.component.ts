import { Component, Input } from '@angular/core';
import { WindowsInputComponent } from '../windows-input/windows-input.component';
import { DoorsInputComponent } from '../doors-input/doors-input.component';
import { BridgeInputComponent } from '../bridge-input/bridge-input.component';
import { GroundInputComponent } from '../ground-input/ground-input.component';
import { WallInputComponent } from '../wall-input/wall-input.component';
import { PropertyInputComponent } from '../property-input/property-input.component';
import { MatDialog } from '@angular/material';
import { RoofInputComponent } from '../roof-input/roof-input.component';

@Component({
  selector: 'app-input-windows',
  templateUrl: './input-windows.component.html',
  styleUrls: ['./input-windows.component.css'],
})

export class InputWindowsComponent{
  
  @Input () public properties: object[];

  constructor(public dialog: MatDialog){
  }

  //Smoothly scroll down to target div
  scrollToOther(index:number): void{
    if(document.getElementById(this.properties[index+1]["id"])){
      document.getElementById(this.properties[index+1]["id"]).scrollIntoView({ block: 'end',  behavior: 'smooth' });
    }
  }

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
  openRoofDialog(): void {
    const dialogRef = this.dialog.open(RoofInputComponent, {});
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
  openWallDialog(): void {
    const dialogRef = this.dialog.open(WallInputComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ', result);
    });
  }
  openPropertyDialog(): void {
    const dialogRef = this.dialog.open(PropertyInputComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ', result);
    });
  }

}
