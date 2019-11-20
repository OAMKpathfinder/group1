import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-bridge-input',
  templateUrl: './bridge-input.component.html',
  styleUrls: ['./bridge-input.component.css']
})
export class BridgeInputComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BridgeInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  saveBridge() { 
    this.dialogRef.close("It was saved.")
  }

}
