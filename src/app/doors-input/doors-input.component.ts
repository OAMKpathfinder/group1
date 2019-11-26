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
  uKnown: string = '';
  uValue: number;
  materials: string = "";
  area: string = "";
  protected: boolean = false;
  bridgeValue: number;
  interaction: boolean = false;
  uCheck: boolean;

  constructor(
    private APIService: APIService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DoorsInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    let namePattern = '[a-zA-z0-9()_ -]*';
    let numberPattern = "^[0-9.]*";
    //Initialising form and validation 
    this.doorForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern(namePattern)]],
      'uKnown': [null, Validators.required],
      'uValue': [null],
      'materials': [null],
      'area': [null],
      'bridgeValue': [null, [Validators.required, Validators.pattern(numberPattern)]],
      'protected': [null, Validators.required]
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
      localStorage.setItem('currentDoor', JSON.stringify(this.doorForm.value));
    } catch (e) { }
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

  ngOnInit() {
    this.setValidators();
    var doorCache = localStorage.getItem('currentDoor');
    if (doorCache) {
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
