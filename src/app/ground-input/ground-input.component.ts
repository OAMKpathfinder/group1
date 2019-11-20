import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ground-input',
  templateUrl: './ground-input.component.html',
  styleUrls: ['./ground-input.component.css']
})
export class GroundInputComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GroundInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  saveGround() { 
    this.dialogRef.close("It was saved.")
  }


}
