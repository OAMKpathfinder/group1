import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIService } from '../api-service.service';

@Component({
  selector: 'app-bridge-input',
  templateUrl: './bridge-input.component.html',
  styleUrls: ['./bridge-input.component.css']
})
export class BridgeInputComponent implements OnInit {

  title: string = "Bridge Values";
  bridgeForm: FormGroup;

  outerWallToOuterWall: number;
  outerWallToRoof: number;
  outerWallToMiddleBasement: number;
  outerWallToGroundFloor: number;

  constructor(
    public dialogRef: MatDialogRef<BridgeInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private apiService: APIService
  ){
    this.bridgeForm = fb.group({
      'outerWalltoOuterWall': [null, ],
      'outerWalltoRoof': [null, ],
      'outerWalltoMiddleBasement': [null,],
      'outerWalltoGroundFloor': [null, ],
    })
  }

  ngOnInit() {
  }

  saveBridge() { 
    this.dialogRef.close();
    //Here goes for api post to save bridges
    // this.apiService
  }
  //Canceling the inputs and closing window
  onCancel(): void {
    this.dialogRef.close();
  }

}
