import { Component, Input, OnInit, Inject, SimpleChanges } from '@angular/core';
import { WindowsInputComponent } from '../windows-input/windows-input.component';
import { DoorsInputComponent } from '../doors-input/doors-input.component';
import { BridgeInputComponent } from '../bridge-input/bridge-input.component';
import { GroundInputComponent } from '../ground-input/ground-input.component';
import { WallInputComponent } from '../wall-input/wall-input.component';
import { PropertyInputComponent } from '../property-input/property-input.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { APIService, GroundFloor, roofConstruction, OuterWall, others } from '../api-service.service';
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

  id: number;
  name: string;
  // door arrays
  doorId: number;
  doors: Door[] = [];
  arryboi = [];

  // ground arrays
  grounds: GroundFloor[] = [];
  groundsId: number = 1;

  // roof arrays
  roofs: roofConstruction[] = [];
  roofsId: number = 1;

  // wall arrays
  walls: OuterWall[] = [];
  wallsId: number = 1;

  // others arrays
  others: others[] = [];
  othersId: number = 1;

  constructor(public dialog: MatDialog, private APIservice: APIService) {
    this.doors = [];
    this.grounds = [];
    this.roofs = [];
    this.walls = [];
    this.others = [];
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
        this.grounds.push(grounds)
      })
      console.log(this.grounds)
  }

  getRoofsData() {
    this.APIservice.getRoofs()
      .subscribe((roofs: roofConstruction) => {
        this.roofs.push(roofs)
      })
      console.log(this.roofs)
  }

  getWallsData() {
    this.APIservice.getWallFull()
      .subscribe((walls: OuterWall) => {
        this.walls.push(walls)
      })
      console.log(this.walls)
  }

  getOthersData() {
    this.APIservice.getOtherFull()
      .subscribe((others: others) => {
        this.others.push(others)
      })
      console.log(this.others)
  }

  //testing purposes
  pleaseOneDoorThanks() {
    this.APIservice.getDoor(this.doorId)
      .subscribe((doors: Door) => {
        this.doors.push(doors);
      })
  }
    
  deleteDoor(doorId) {
    this.APIservice.deleteDoor(doorId)
    console.log(`Tried to delete door ${doorId}, but nothing happened.`)
  }

  todo() {
    alert("Todo")
  }

  //Smoothly scroll down to target div
  scrollToOther(index: number): void {
    if (document.getElementById(this.properties[index + 1]["id"])) {
      document.getElementById(this.properties[index + 1]["id"]).scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }

  //Deprecated editing method
  //Open edit dialog
  // openEditDialog(id, doors, name, uValue, area, materials, bridgeValue, protecc): void {
  //   this.dialog.open(EditDoorComponent, {
  //     width: '500px',
  //     maxHeight: '600px',
  //     data: {
  //       doorId: id,
  //       doorDoors: doors,
  //       doorName: name,
  //       doorUvalue: uValue,
  //       doorArea: area,
  //       doorMaterials: materials,
  //       doorBridgeValue: bridgeValue,
  //       doorProtected: protecc
  //     }
  //   });  
  // }

  //Input Dialogs 
  openWindowDialog(): void {
    this.dialog.open(WindowsInputComponent, {width: '350px', maxHeight: '600px'});
  }
  openDoorDialog(door): void {
    this.dialog.open(DoorsInputComponent, {data: {door: door}, width: '350px', maxHeight: '600px'});
  }
  openRoofDialog(roof): void {
    this.dialog.open(RoofInputComponent, {data: {roof: roof}, width: '350px', maxHeight: '600px'});
  }
  openBridgeDialog(): void {
    this.dialog.open(BridgeInputComponent, {width: '350px', maxHeight: '550px'});
  }
  openGroundDialog(ground): void {
    this.dialog.open(GroundInputComponent, {data:{ground: ground}, width: '350px', maxHeight: '550px'});
  }
  openWallDialog(wall): void {
    this.dialog.open(WallInputComponent, {data: {wall: wall}, width: '350px', maxHeight: '550px'});
  }
  openPropertyDialog(): void {
    this.dialog.open(PropertyInputComponent, {width: '350px', maxHeight: '550px'});
  }
  openOthersDialog(other): void {
    this.dialog.open(OthersInputComponent, {data:{other: other}, width: '350px', maxHeight: '550px'});
  }

  ngOnInit() {
    this.getDoorData()
    this.getGroundData()
    this.getRoofsData()
    this.getWallsData()
    this.getOthersData()

    //test
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
  // openDialog(prop: string): any{
  //   switch(prop){
  //     case "ground":
  //       this.openGroundDialog()
  //       break;
  //     case "roof":
  //       this.openRoofDialog()
  //       break;
  //     case "door":
  //       this.openDoorDialog()
  //       break;
  //     case "bridge":
  //       this.openBridgeDialog()
  //       break;
  //     case "window":
  //       this.openWindowDialog()
  //       break;
  //     case "outerwall":
  //       this.openWallDialog()
  //       break;
  //     default:
  //       return ;
  //   }

  // }

  // ngOnInit(){
  //     // this.effect();
  // }
}
