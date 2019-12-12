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
  uKnown: string;
  uValue: number;
  materials: string = "";
  area: string = "";
  protected: boolean = false;
  interaction: boolean = false;
  uCheck: boolean;
  title: string = "Add a Roof";
  condition: number;

  // ID parameter for edit function
  id: number = this.data.roof.id;

  constructor(
    private APIService: APIService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RoofInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    //roof form
    this.roofForm = fb.group({
      uKnown: [null, Validators.required],
      uValue: [null],
      materials: [null],
      area: [null],
      protected: [null, Validators.required],
      condition: [null]
    });
  }

  //Checking if radio button checked and showing valid options
  onChange(uRadio: boolean, event: any) {
    if (uRadio) {
      this.interaction = true;
      this.uKnown = event.value;
      this.uCheck = event.value == 'true' ? true : false
    } else { 
      console.log("blöt")
    }
    try {
      //Saving form state
      if (this.data.roof == 0) {
        localStorage.setItem('currentRoof', JSON.stringify(this.roofForm.value));
      }
    } catch (e) { }

  }

  /**
   * Sending roof data into API
   */
  saveRoof() {
    localStorage.removeItem('currentDoor');
    this.dialogRef.close();
    if (this.data.roof == 0) {
      this.APIService.addRoof(this.roofForm.value)
        .subscribe(data => {
        //for debugging
        console.log(data);
      }); 
    } else if(this.data.roof != 0) {
      this.APIService.updateRoof(this.roofForm.value, this.id)
        .subscribe(res => {
          console.log(res)
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data);
    this.setValidators();
    var roofCache = localStorage.getItem('currentRoof');
    if (roofCache && this.data.roof == 0) {
      const roofCacheP = JSON.parse(roofCache)
      this.roofForm.setValue({
        uValue: roofCacheP['uValue'],
        uKnown: roofCacheP['uKnown'],
        area: roofCacheP['area'],
        materials: roofCacheP['materials'],
        protected: roofCacheP['protected']
      });
      if (roofCacheP['uKnown'] == 'true') { this.uCheck = true }
      if (roofCacheP['uKnown'] !== null) { this.interaction = true }
    } else if (this.data.ground !== 0) {
      this.title = 'Edit Roof';
      let editData = this.data.roof;
      let uEdit = editData.uValue > 0 ? 'true' : 'false';
      console.log(editData.protected)
      this.roofForm.setValue({
        area: editData.area,
        uValue: editData.uvalue,
        uKnown: uEdit,
        materials: editData.materials,
        protected: editData.protected.toString()
      });
      if (uEdit) {
        this.uCheck = true
      }
      if (uEdit !== null) {
        this.interaction = true
      }
    }
  }
  //Conditional Validation
  setValidators() {
    let numberPattern = "^[0-9.]*";
    const uKnownValid = this.roofForm.get('uKnown');
    const uValueValid = this.roofForm.get('uValue');
    const areaValid = this.roofForm.get('area');
    const materialsValid = this.roofForm.get('materials');
    this.roofForm.get('uKnown').valueChanges
      .subscribe(uKnownValid => {
        if (uKnownValid === 'true') {
          uValueValid.setValidators([Validators.required, Validators.pattern(numberPattern)]);
          areaValid.setValidators(null);
          materialsValid.setValidators(null);
        } else {
          uValueValid.setValidators(null);
          areaValid.setValidators([Validators.required, Validators.pattern(numberPattern)]);
          materialsValid.setValidators([Validators.required]);
        }
        uValueValid.updateValueAndValidity();
        areaValid.updateValueAndValidity();
        materialsValid.updateValueAndValidity();
      });
  }
}
