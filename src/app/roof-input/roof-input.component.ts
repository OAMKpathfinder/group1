import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { APIService } from "../api-service.service";

@Component({
  selector: "app-roof-input",
  templateUrl: "./roof-input.component.html",
  styleUrls: ["./roof-input.component.css"]
})
export class RoofInputComponent implements OnInit {
  roofForm: FormGroup;
  properties: number;
  uKnown: boolean = false;
  uValue: number;
  materials: string = "";
  area: string = "";
  protected: boolean = false;
  interaction: boolean = false;
  constructor(
    private APIService: APIService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RoofInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    //roof form
    this.roofForm = fb.group({
      properties: [null],
      uKnown: [null, Validators.required],
      uValue: [null],
      materials: [null],
      area: [null],
      protected: [null, Validators.required]
    });
  }

  /**
   * Validation checking
   */
  onChange(event: any) {
    if (
      typeof event.source.name !== undefined &&
      /mat-radio-group/i.test(event.source.name)
    ) {
      this.interaction = true;
      this.uKnown = event.value == "true" ? true : false;
    } else {
    }
  }

  /**
   * Sending roof data into API
   */
  saveRoof() {
    this.dialogRef.close();
    this.APIService.addRoof(this.roofForm.value).subscribe(data => {
      //for debugging
      console.log(data);
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
