import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { APIService } from '../api-service.service'

@Component({
  selector: 'app-others-input',
  templateUrl: './others-input.component.html',
  styleUrls: ['./others-input.component.css']
})
export class OthersInputComponent {
  //Initialising form variables
  othersForm: FormGroup;
  cost: number;
  hjoht: number;
  pipe: boolean = false;

  constructor(
    private APIService: APIService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<OthersInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    //Initialising form and validation 
    //TODO further validation  
    this.othersForm = fb.group({
      'cost': [null, Validators.required],
      'hjoht': [null, Validators.required],
      'pipe': [null, Validators.required]
    });
  }

  //Saving the form and closing window
  saveOthers() {
    this.dialogRef.close();
    //Here is the form result to send to the API
    this.APIService.addOthers(this.othersForm.value)
      .subscribe(data => {
        console.log(data)
      });
  }

  //Canceling the inputs and closing window
  onCancel(): void {
    this.dialogRef.close();
  }

}