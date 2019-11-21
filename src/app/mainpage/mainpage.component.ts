import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { MatDialog } from '@angular/material';
import { WindowsInputComponent } from '../windows-input/windows-input.component';
import { DoorsInputComponent } from '../doors-input/doors-input.component';
import { BridgeInputComponent } from '../bridge-input/bridge-input.component';
import { GroundInputComponent } from '../ground-input/ground-input.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    // the trigger name does not matter, but it must match the name used in the [@...] attribute in the template.
    trigger('simpleFadeAnimation', [

      // the "in" style determines how the element looks when it is visible.
      // the style name "in" must match the value of the [@simpleFadeAnimation]="'in'" attribute in the template
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        // the styles start from this point when the element appears
        style({ opacity: 0 }),
        // and animate toward the "in" state above
        animate(600)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        // fading out uses a different syntax, with the "style" being passed into animate()
        animate(600, style({ opacity: 0 })))
    ]),

    // the animation for the message
    trigger('messageAnimation', [

      // this defines the "resting" styles for the "visible" state
      // (i.e., what styles the message element has when visible)
      state('visible', style({
        opacity: 0.9,
        display: 'block',
      })),

      // this defines the "resting" styles for the "hidden" state.
      // (i.e., what styles the message element has when hidden)
      state('hidden', style({
        opacity: 0,
        display: 'none',
      })),

      // transition from "hidden" to "visible" states using an animation
      transition('hidden => visible', animate('300ms ease-in')),

      // transition from "visible" to "hidden" similarly
      transition('visible => hidden', animate('300ms ease-out'))

    ]),

  ]
})
export class MainpageComponent implements OnInit {

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

  
  constructor(private dialog: MatDialog) { }

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

  ngOnInit() {
  }

}
