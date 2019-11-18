import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-landing-modal',
  templateUrl: './landing-modal.component.html',
  styleUrls: ['./landing-modal.component.css']
})
export class LandingModalComponent implements OnInit {

  constructor() { }

  alarm() {
    alert("CIA is on the way..")
  }

  ngOnInit() {
  }

}
