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
import { Door, windowSingle } from '../api-service.service';
import { RoofInputComponent } from "../roof-input/roof-input.component";
import { OthersInputComponent } from '../others-input/others-input.component';

@Component({
  selector: 'app-input-windows',
  templateUrl: './input-windows.component.html',
  styleUrls: ['./input-windows.component.css'],
})

export class InputWindowsComponent implements OnInit {

  
  @Input() public properties: object[];

  //used for below openDialog, passing parameter of width
  private dialogBoxWidth: string = "350px";

  id = 1;
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

  windows: windowSingle[] = [];
  windowsId: number = 1;

  uvalueArr = [];

  constructor(public dialog: MatDialog, private APIservice: APIService) {
    this.doors = [];
    this.grounds = [];
    this.roofs = [];
    this.walls = [];
    this.others = [];
    this.windows = []; 
    this.uvalueArr = [];
  }

  getDoorData() {
    this.APIservice.getDoorsFull()
      .subscribe((doors: Door[]) => {
        this.doors = doors
        this.arryboi.push(doors)

      })
  }

  getGroundData() {
    this.APIservice.getGroundFull()
      .subscribe((grounds: GroundFloor) => {
        this.grounds.push(grounds)
      })
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

  getWindows() {
      this.APIservice.getAllSingles(this.windowsId)
      .subscribe((windows: windowSingle) => {
        this.windows.push(windows);  
      })
  }
    
  /**
   * 
   * @param doorId 
   * @todo
   * Make the delete function to actually work
   */
  deleteDoor(doorId) {
    this.APIservice.deleteDoor(doorId)
    console.log(`Tried to delete door ${doorId}, but nothing happened.`)
  }


  //Smoothly scroll down to target div
  scrollToOther(index: number): void {
    if (document.getElementById(this.properties[index + 1]["id"])) {
      document.getElementById(this.properties[index + 1]["id"]).scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }

  //Input Dialogs 
  openWindowDialog(window): void {
    this.dialog.open(WindowsInputComponent, {data: {window : window}, width: this.dialogBoxWidth, maxHeight: '600px'});
  }
  openDoorDialog(door): void {
    this.dialog.open(DoorsInputComponent, {data: {door: door}, width: this.dialogBoxWidth, maxHeight: '600px'});
  }
  openRoofDialog(roof): void {
    this.dialog.open(RoofInputComponent, {data: {roof: roof}, width: this.dialogBoxWidth, maxHeight: '600px'});
  }
  openBridgeDialog(): void {
    this.dialog.open(BridgeInputComponent, {width: this.dialogBoxWidth, maxHeight: '550px'});
  }
  openGroundDialog(ground): void {
    this.dialog.open(GroundInputComponent, {data:{ground: ground}, width: this.dialogBoxWidth, maxHeight: '550px'});
  }
  openWallDialog(wall): void {
    this.dialog.open(WallInputComponent, {data: {wall: wall}, width: this.dialogBoxWidth, maxHeight: '550px'});
  }
  openPropertyDialog(): void {
    this.dialog.open(PropertyInputComponent, {width: this.dialogBoxWidth, maxHeight: '550px'});
  }
  openOthersDialog(others): void {
    this.dialog.open(OthersInputComponent, {data:{others: others}, width: this.dialogBoxWidth, maxHeight: '550px'});
  }

  ngOnInit() {
    this.getDoorData()
    this.getGroundData()
    this.getRoofsData()
    this.getWallsData()
    this.getOthersData()
    this.getWindows()

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

}
