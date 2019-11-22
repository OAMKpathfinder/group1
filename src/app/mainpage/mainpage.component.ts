import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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

  lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  properties: object[] = [
    {
      "property" : "location", "title": "location & periods", "sub": "sub title", "desc": this.lorem, "type": "location", "id":"location-id"
    },
    {
      "property" : "ground", "title": "ground", "sub": "floor", "desc": this.lorem, "type": "ground", "id":"floor-id"
    },
    {
      "property" : "outerwall", "title": "outerwall", "sub": "sub title", "desc": this.lorem, "type": "outerwall", "id":"outerwall-id"
    },
    {
      "property" : "roof", "title": "roof", "sub": "sub title", "desc": this.lorem, "type": "roof", "id":"roof-id"
    },
    {
      "property" : "door", "title": "door", "sub": "sub title", "desc": this.lorem, "type": "door", "id":"doors-id"
    },
    {
      "property" : "window", "title": "window", "sub": "sub title", "desc": this.lorem, "type": "window", "id":"windows-id"
    },
    {
      "property" : "others", "title": "others", "sub": "sub title", "desc": this.lorem, "type": "others", "id":"others-id"
    },
  ]

  //breadcrumb required 2 Inputs, id for referring the div "height" (from top and next div top?)
  //phase for used to name the breadcrumb and referring the li to assign/remove active class
  ids = ["location-id", "floor-id", "outerwall-id", "roof-id", "doors-id", "windows-id", "others-id"];
  phases = ["location", "floor", "outerwall", "roof", "doors", "windows", "others"];

  
  constructor(){
  }


  ngOnInit(){
  }

}
