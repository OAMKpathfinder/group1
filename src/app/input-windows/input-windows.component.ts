import { Component, Input, OnInit, Inject } from '@angular/core';
import { WindowsInputComponent } from '../windows-input/windows-input.component';
import { DoorsInputComponent } from '../doors-input/doors-input.component';
import { BridgeInputComponent } from '../bridge-input/bridge-input.component';
import { GroundInputComponent } from '../ground-input/ground-input.component';
import { WallInputComponent } from '../wall-input/wall-input.component';
import { PropertyInputComponent } from '../property-input/property-input.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { APIService } from '../api-service.service';
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

  id = 1;
  name: string;
  // door arrays
  doors: Door[];
  arryboi = [];

  windows: windowSingle[] = [];
  windowsId: number = 1;

  constructor(public dialog: MatDialog, private APIservice: APIService) {
    this.doors = [];
    this.windows = []; 
  }

  //door stuff
  getDoorData() {
    this.APIservice.getDoorsFull()
      .subscribe((doors: Door[]) => {
        this.doors = doors
        this.arryboi.push(doors)
        this.doors.forEach(i => {
          //testing
          this.name = i.name;
          this.id = i.id;
        })
        // console.log(this.arryboi)
      })
  }


  getWindows() {
      this.APIservice.getAllSingles(this.windowsId)
      .subscribe((windows: windowSingle) => {
        this.windows.push(windows);  
      })
  }
    

  //Smoothly scroll down to target div
  scrollToOther(index: number): void {
    if (document.getElementById(this.properties[index + 1]["id"])) {
      document.getElementById(this.properties[index + 1]["id"]).scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }

  //Input Dialogs 
  openWindowDialog(window): void {
    this.dialog.open(WindowsInputComponent, {data: {window : window}, width: '350px', maxHeight: '600px'});
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

  ngOnInit() {
    this.doorBoi();  
    this.getDoorData()
    this.getWindows();
  }
 

}
