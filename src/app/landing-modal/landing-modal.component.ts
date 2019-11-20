import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-landing-modal',
  templateUrl: './landing-modal.component.html',
  styleUrls: ['./landing-modal.component.css']
})
export class LandingModalComponent implements OnInit { 

  public message: string;

  constructor() { }

  nope() {
    this.message = "Nope";
    alert(this.message);
  }

  ngOnInit() {
  }

}
