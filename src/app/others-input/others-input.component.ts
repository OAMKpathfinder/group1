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
  title: string = "Add Other Information"

  //ID parameter for edit function
  id: number = this.data.others.id;

  constructor(
    private APIService: APIService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<OthersInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    let numberPattern = "^[0-9.]*";
    this.othersForm = fb.group({
      cost: [null, [Validators.required, Validators.pattern(numberPattern)]],
      hjoht: [null, [Validators.required, Validators.pattern(numberPattern)]],
      pipe: [null, Validators.required]
    });
  }

  onChange() {
    try {
      //Saving form state
      if (this.data.others == 0) {
        localStorage.setItem('currentOther', JSON.stringify(this.othersForm.value));
      }
    } catch (e) { }
  }

  //Saving the form and closing window
  saveOthers() {
    this.dialogRef.close();
    // This decided wheter the form is used for put or post
    if (this.data.others == 0) {
      this.APIService.addOthers(this.othersForm.value)
        .subscribe(data => {
          console.log(data)
        });
    } else if (this.data.others != 0) {
      this.APIService.updateOthers(this.othersForm.value, this.id)
        .subscribe(res => {
          console.log(res)
        });
    }
  }

  //Canceling the inputs and closing window
  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data)
    console.log(this.data.cost)
    var othersCache = localStorage.getItem('currentOther');
    if (othersCache && this.data.others == 0) {
      const othersCacheP = JSON.parse(othersCache)
      this.othersForm.setValue({
        cost: othersCacheP['cost'],
        pipe: othersCacheP['pipe'],
        hjoht: othersCacheP['hjoht'],
      });
    } else if (this.data.others !== 0) {
      this.title = "Edit Other Information";
      let editData = this.data.others;
      this.othersForm.setValue({
        cost: editData.cost,
        pipe: editData.pipe.toString(),
        hjoht: editData.hjoht
      });
    }
  }
}