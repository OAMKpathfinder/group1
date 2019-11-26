import { Component, Input } from '@angular/core';
import { WindowsInputComponent } from '../windows-input/windows-input.component';
import { DoorsInputComponent } from '../doors-input/doors-input.component';
import { BridgeInputComponent } from '../bridge-input/bridge-input.component';
import { GroundInputComponent } from '../ground-input/ground-input.component';
import { WallInputComponent } from '../wall-input/wall-input.component';
import { PropertyInputComponent } from '../property-input/property-input.component';
import { OthersInputComponent } from '../others-input/others-input.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-input-windows',
  templateUrl: './input-windows.component.html',
  styleUrls: ['./input-windows.component.css'],
})

export class InputWindowsComponent {

  @Input() public properties: object[];

  constructor(public dialog: MatDialog) {
  }

  //Smoothly scroll down to target div
  scrollToOther(index: number): void {
    if (document.getElementById(this.properties[index + 1]["id"])) {
      document.getElementById(this.properties[index + 1]["id"]).scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }

  //Input Dialogs 
  openWindowDialog(): void {
    this.dialog.open(WindowsInputComponent, {width: '350px', maxHeight: '550px'});
  }
  openDoorDialog(): void {
    this.dialog.open(DoorsInputComponent, {});
  }
  openBridgeDialog(): void {
    this.dialog.open(BridgeInputComponent, {});
  }
  openGroundDialog(): void {
    this.dialog.open(GroundInputComponent, {});
  }
  openWallDialog(): void {
    this.dialog.open(WallInputComponent, {});
  }
  openPropertyDialog(): void {
    this.dialog.open(PropertyInputComponent, {});
  }
  openOthersDialog(): void {
    this.dialog.open(OthersInputComponent, {});
  }

}
