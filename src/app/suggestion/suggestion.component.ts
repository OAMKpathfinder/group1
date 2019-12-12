import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  //Dummy text for instruction of energy efficiency improvement
  lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  //Currently it is used as injectable, passed values from parent component for deploying it
  @Input() suggestion: object[] ;

  //angular material icon library constructor to use library and initialize the assets,
  //which is used arrow and up/grow icon  
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,){
    this.iconRegistry.addSvgIcon('grow', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/growth.svg'));
    this.iconRegistry.addSvgIcon('right-arrow', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/right-arrow.svg'));
  }

  ngOnInit() {
  }

}
