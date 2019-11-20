import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-doors-input',
  templateUrl: './doors-input.component.html',
  styleUrls: ['./doors-input.component.css']
})

export class DoorsInputComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DoorsInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  saveDoor() { 
    this.dialogRef.close("It was saved.")
  }

}



