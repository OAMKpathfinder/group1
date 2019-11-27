import { Component, Input, OnInit, Inject } from '@angular/core';
import { WindowsInputComponent } from '../windows-input/windows-input.component';
import { DoorsInputComponent } from '../doors-input/doors-input.component';
import { BridgeInputComponent } from '../bridge-input/bridge-input.component';
import { GroundInputComponent } from '../ground-input/ground-input.component';
import { WallInputComponent } from '../wall-input/wall-input.component';
import { PropertyInputComponent } from '../property-input/property-input.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { RoofInputComponent } from '../roof-input/roof-input.component';
import { APIService } from '../api-service.service';
import { EditDoorComponent } from '../edit-door/edit-door.component';
import { Door } from '../api-service.service';

@Component({
  selector: 'app-input-windows',
  templateUrl: './input-windows.component.html',
  styleUrls: ['./input-windows.component.css'],
})

export class InputWindowsComponent implements OnInit {

  @Input() public properties: object[];

  id = 22;
  name: string;

  // test
  sendValue = "Placeholder data from input-windows";

  // door arrays
  doors: Door[];
  arryboi = [];

  constructor(public dialog: MatDialog, private APIservice: APIService) {
    this.doors = [];
  }

  //door stuff
  doorBoi() {
    this.APIservice.getDoorsFull()
      .subscribe((doors: Door[]) => {
        this.doors = doors
        this.arryboi.push(doors)
        this.doors.forEach(i => {
          //testing
          console.log(`${i.name}`)
          this.name = i.name;
          this.id = i.id;
        })
        console.log(this.arryboi)
      })
  }

  //testing purposes
  pleaseOneDoorThanks() {
    this.APIservice.getDoor(22)
      .subscribe(res => {
        console.log(res)
      })
  }

  //Smoothly scroll down to target div
  scrollToOther(index: number): void {
    if (document.getElementById(this.properties[index + 1]["id"])) {
      document.getElementById(this.properties[index + 1]["id"]).scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }

  //Open edit dialog
  openEditDialog(id, doors, name, uValue, area, materials, bridgeValue, protecc): void {
    const dialogRef = this.dialog.open(EditDoorComponent, {
      data: {
        doorId: id,
        doorDoors: doors,
        doorName: name,
        doorUvalue: uValue,
        doorArea: area,
        doorMaterials: materials,
        doorBridgeValue: bridgeValue,
        doorProtected: protecc
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ', result);
    })
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

  ngOnInit() {
    this.doorBoi()
    this.pleaseOneDoorThanks()
  }

}
