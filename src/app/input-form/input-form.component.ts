import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})


export class InputFormComponent implements OnInit {
  @Input() public msg : string;
  
  constructor() { }

  ngOnInit() {
  }

}
