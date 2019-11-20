import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-windows-input',
  templateUrl: './windows-input.component.html',
  styleUrls: ['./windows-input.component.css']
})
export class WindowsInputComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WindowsInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  saveWindow() { 
    this.dialogRef.close("It was saved.")
  }

}
