import { Component, Input } from '@angular/core';
import { WindowsInputComponent } from '../windows-input/windows-input.component';
import { DoorsInputComponent } from '../doors-input/doors-input.component';
import { BridgeInputComponent } from '../bridge-input/bridge-input.component';
import { GroundInputComponent } from '../ground-input/ground-input.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-input-windows',
  templateUrl: './input-windows.component.html',
  styleUrls: ['./input-windows.component.css']
})

export class InputWindowsComponent{
  
  @Input () public properties: object[];
  @Input () public id: string;
  @Input () public next: string;
  @Input () public title: string;
  @Input () public subTitle: string;
  @Input () public desc: string;
  @Input () public type: string;
  @Input () public isThereNext: boolean;

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
