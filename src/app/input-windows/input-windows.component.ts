import { Component, Input, OnInit, AfterViewInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-input-windows',
  templateUrl: './input-windows.component.html',
  styleUrls: ['./input-windows.component.css']
})

export class InputWindowsComponent implements OnInit, AfterViewInit{
  
  @Input () public id: string;
  @Input () public next: string;
  @Input () public title: string;
  @Input () public subTitle: string;
  @Input () public desc: string;
  @Input () public isThereNext: boolean;

  constructor(){
  }
  ngOnInit(){
  }
  ngAfterViewInit(){
  }

  scrollToOther(){
    if(document.getElementById(this.next)){
      document.getElementById(this.next).scrollIntoView({ block: 'end',  behavior: 'smooth' });
    }
  }

}
