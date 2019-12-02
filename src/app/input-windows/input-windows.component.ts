import { Component, Input, OnInit, Inject } from '@angular/core';
import { WindowsInputComponent } from '../windows-input/windows-input.component';
import { DoorsInputComponent } from '../doors-input/doors-input.component';
import { BridgeInputComponent } from '../bridge-input/bridge-input.component';
import { GroundInputComponent } from '../ground-input/ground-input.component';
import { WallInputComponent } from '../wall-input/wall-input.component';
import { PropertyInputComponent } from '../property-input/property-input.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { APIService, GroundFloor } from '../api-service.service';
import { EditDoorComponent } from '../edit-door/edit-door.component';
import { Door } from '../api-service.service';
import { RoofInputComponent } from "../roof-input/roof-input.component";
import { OthersInputComponent } from '../others-input/others-input.component';

@Component({
  selector: 'app-input-windows',
  templateUrl: './input-windows.component.html',
  styleUrls: ['./input-windows.component.css'],
})

export class InputWindowsComponent implements OnInit {

  @Input() public properties: object[];

  id = 22;
  name: string;
  // door arrays
  doors: Door[] = [];
  arryboi = [];

  //ground arrays
  grounds: GroundFloor[];
  groundArr = [];

  constructor(public dialog: MatDialog, private APIservice: APIService) {
    this.doors = [];
    this.grounds = [];
  }

  //door stuff
  getDoorData() {
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

  getGroundData() {
    this.APIservice.getGroundFull()
      .subscribe((grounds: GroundFloor) => {
        this.groundArr.push(grounds)
        this.grounds.push(grounds)
      })
      console.log(this.grounds)
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
    this.dialog.open(EditDoorComponent, {
      width: '500px',
      maxHeight: '600px',
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
  }

  //Input Dialogs 
  openWindowDialog(): void {
    this.dialog.open(WindowsInputComponent, {width: '350px', maxHeight: '600px'});
  }
  openDoorDialog(): void {
    this.dialog.open(DoorsInputComponent, {width: '350px', maxHeight: '550px'});
  }
  openRoofDialog(): void {
    this.dialog.open(RoofInputComponent, {width: '350px', maxHeight: '550px'});
  }
  openBridgeDialog(): void {
    this.dialog.open(BridgeInputComponent, {width: '350px', maxHeight: '550px'});
  }
  openGroundDialog(): void {
    this.dialog.open(GroundInputComponent, {width: '350px', maxHeight: '550px'});
  }
  openWallDialog(): void {
    this.dialog.open(WallInputComponent, {width: '350px', maxHeight: '550px'});
  }
  openPropertyDialog(): void {
    this.dialog.open(PropertyInputComponent, {width: '350px', maxHeight: '550px'});
  }
  openOthersDialog(): void {
    this.dialog.open(OthersInputComponent, {width: '350px', maxHeight: '550px'});
  }

  ngOnInit() {
    this.getDoorData()
    this.getGroundData()
    this.pleaseOneDoorThanks()
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async effect(){
    while(true){
      if(document.getElementById("base-img")){
        console.log("effect added");
        document.getElementById("base-img").classList.add("effect");
        await this.sleep(1000);
        document.getElementById("base-img").classList.toggle("effect");
        console.log("effect removed");
        await this.sleep(1000);
      }
    }
  }

  hover(e){
    for(let i = 0; i < document.getElementsByName("base-img").length; i++){
      document.getElementsByName("base-img")[i].classList.add("effect");
    }
  }
  hoverOut(e){
    for(let i = 0; i < document.getElementsByName("base-img").length; i++){
      document.getElementsByName("base-img")[i].classList.toggle("effect");
    }
  }
  openDialog(prop: string): any{
    switch(prop){
      case "ground":
        this.openGroundDialog()
        break;
      case "roof":
        this.openRoofDialog()
        break;
      case "door":
        this.openDoorDialog()
        break;
      case "bridge":
        this.openBridgeDialog()
        break;
      case "window":
        this.openWindowDialog()
        break;
      case "outerwall":
        this.openWallDialog()
        break;
      default:
        return ;
    }

  }

  // ngOnInit(){
  //     // this.effect();
  // }
}
