import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: 'app-windows-input',
  templateUrl: './windows-input.component.html',
  styleUrls: ['./windows-input.component.css']
})
export class WindowsInputComponent{
  //Initialising form variables
  windowForm: FormGroup;
  name: string = '';
  uKnown: boolean = false;
  uValue: number;
  material: string = '';
  area: string = '';
  protected: string = '';
  bridge: number;
  interaction: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<WindowsInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    //Initialising form and validation 
    //TODO further validation  
    this.windowForm = fb.group({
      'name': [null, Validators.required],
      'uKnown': [null, Validators.required],
      'uValue': [null],
      'material': [null],
      'area': [null],
      'bridge': [null, Validators.required],
      'protected': [null, Validators.required]
    });
  }

  //Checking if radio button checked and showing valid options
  onChange(event: any) {
    if (typeof event.source.name !== undefined &&
      /mat-radio-group/i.test(event.source.name)) {
      this.interaction = true;
      this.uKnown = event.value == 'true' ? true : false;
    } else { }
  }
  
  //Saving the form and closing window
  saveWindow() {
    this.dialogRef.close();
    //Here is the form result to send to the API
    console.log(this.windowForm.value);
  }

  //Canceling the inputs and closing window
  onCancel(): void {
    this.dialogRef.close();
  }


}
