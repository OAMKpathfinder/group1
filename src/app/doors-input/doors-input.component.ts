import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { APIService } from '../api-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: "app-doors-input",
  templateUrl: "./doors-input.component.html",
  styleUrls: ["./doors-input.component.css"]
})
export class DoorsInputComponent implements OnInit {
  doorForm: FormGroup;
  name: string = "";
  uKnown: string;
  uValue: number;
  materials: string = "";
  area: string = "";
  protected: boolean = false;
  bridgeValue: number;
  condition: number;
  interaction: boolean = false;
  uCheck: boolean;

  id: number = this.data.door.id;

  // switching between save & edit buttons
  editAction: boolean = false;

  title: string = "Add a Door"

  constructor(
    private APIService: APIService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DoorsInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    let namePattern = '[a-zA-z0-9()_ -]*';
    let numberPattern = "^[0-9.]*";
    //Initialising form and validation 
    this.doorForm = fb.group({
      name: [null, [Validators.required, Validators.pattern(namePattern)]],
      uKnown: [null, Validators.required],
      uValue: [null],
      materials: [null],
      area: [null],
      bridgeValue: [null, [Validators.required, Validators.pattern(numberPattern)]],
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
    } else { }
    try {
      //Saving form state
      if(this.data.door == 0) {
        localStorage.setItem('currentDoor', JSON.stringify(this.doorForm.value));
      }
    } catch (e) { }
  }

  /**
   * Sending door data into API
   */
  saveDoor() {
    localStorage.removeItem('currentDoor');
    this.dialogRef.close();
    if(this.data.door == 0) {
      this.APIService.addDoor(this.doorForm.value)
      .subscribe(data => {
        // for debugging
        console.log(data);
      })
    } else if (this.data.door != 0) {
      this.APIService.updateDoor(this.doorForm.value, this.id)
        .subscribe(res => {
          console.log(res)
        })
    }
  }

  // editDoor(id) {
  //   this.APIService.updateDoor(this.doorForm.value, id)
  //     .subscribe(res => {
  //       console.log(res)
  //     })
  // }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data.door.id)
    this.setValidators();
    var doorCache = localStorage.getItem('currentDoor');
    if (doorCache && this.data.door == 0) {
      const doorCacheP = JSON.parse(doorCache)
      this.doorForm.setValue({
        area: doorCacheP['area'],
        name: doorCacheP['name'],
        uValue: doorCacheP['uValue'],
        uKnown: doorCacheP['uKnown'],
        materials: doorCacheP['materials'],
        protected: doorCacheP['protected'],
        bridgeValue: doorCacheP['bridgeValue'],
      });
      if (doorCacheP['uKnown'] == 'true') { this.uCheck = true }
      if (doorCacheP['uKnown'] !== null) { this.interaction = true }
    } else if (this.data.door != 0) {
      this.title = "Edit Door";
      let editData = this.data.door;
      let uEdit = editData.uValue > 0 ? 'true' : 'false';
      this.editAction = true;
      console.log(editData.protected);
      this.doorForm.setValue({
        area: editData.area,
        name: editData.name,
        uValue: editData.uvalue,
        uKnown: uEdit,
        materials: editData.materials,
        protected: editData.protected.toString(),
        bridgeValue: editData.bridgevalue
      });
      if(uEdit) {
        this.uCheck = true
      }
      if(uEdit !== null) {
        this.interaction = true
      }
    }
  }
  //Conditional Validation
  setValidators() {
    let numberPattern = "^[0-9.]*";
    const uKnownValid = this.doorForm.get('uKnown');
    const uValueValid = this.doorForm.get('uValue');
    const areaValid = this.doorForm.get('area');
    const materialsValid = this.doorForm.get('materials');
    this.doorForm.get('uKnown').valueChanges
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
