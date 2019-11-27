import { Component, Input} from '@angular/core';
import { WindowsInputComponent } from '../windows-input/windows-input.component';
import { DoorsInputComponent } from '../doors-input/doors-input.component';
import { BridgeInputComponent } from '../bridge-input/bridge-input.component';
import { GroundInputComponent } from '../ground-input/ground-input.component';
import { WallInputComponent } from '../wall-input/wall-input.component';
import { PropertyInputComponent } from '../property-input/property-input.component';
import { OthersInputComponent } from '../others-input/others-input.component';
import { RoofInputComponent } from '../roof-input/roof-input.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-input-windows',
  templateUrl: './input-windows.component.html',
  styleUrls: ['./input-windows.component.css'],
})

export class InputWindowsComponent{

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
    this.dialog.open(WindowsInputComponent, {});
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
  openRoofDialog(): void {
    this.dialog.open(RoofInputComponent, {});
  }
  openOthersDialog(): void {
    this.dialog.open(OthersInputComponent, {});
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
