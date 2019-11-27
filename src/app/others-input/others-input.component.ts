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
    let numberPattern = "^[0-9.]*";
    this.othersForm = fb.group({
      'cost': [null, [Validators.required, Validators.pattern(numberPattern)]],
      'hjoht': [null, [Validators.required, Validators.pattern(numberPattern)]],
      'pipe': [null, Validators.required]
    });
  }

  onChange() {
    try {
      //Saving form state
      localStorage.setItem('currentDoor', JSON.stringify(this.othersForm.value));
    } catch (e) { }
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

  ngOnInit(): void {
    var othersCache = localStorage.getItem('currentOther');
    if (othersCache) {
      const othersCacheP = JSON.parse(othersCache)
      this.othersForm.setValue({
        cost: othersCacheP['cost'],
        pipe: othersCacheP['pipe'],
        hjoht: othersCacheP['hjoht'],
      });
    }
  }
}