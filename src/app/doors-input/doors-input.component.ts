import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIService } from '../api-service.service';

@Component({
  selector: "app-doors-input",
  templateUrl: "./doors-input.component.html",
  styleUrls: ["./doors-input.component.css"]
})
export class DoorsInputComponent implements OnInit {
  doorForm: FormGroup;
  name: string = "";
  uKnown: boolean = false;
  uValue: number;
  materials: string = "";
  area: string = "";
  protected: boolean = false;
  bridgeValue: number;
  interaction: boolean = false;

  constructor(
    private APIService: APIService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DoorsInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    //door form
    this.doorForm = fb.group({
      name: [null, Validators.required],
      uKnown: [null, Validators.required],
      uValue: [null],
      materials: [null],
      area: [null],
      bridgeValue: [null, Validators.required],
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
   * Sending door data into API
   */
  saveDoor() {
    this.dialogRef.close();
    this.APIService.addDoor(this.doorForm.value)
      .subscribe(data => {
        // for degubbing
        console.log(data);
      })
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
