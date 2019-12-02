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
  uKnown: string = '';
  uValue: number;
  materials: string = "";
  area: string = "";
  protected: boolean = false;
  interaction: boolean = false;
  uCheck: boolean;

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
      protected: [null, Validators.required]
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
      localStorage.setItem('currentRoof', JSON.stringify(this.roofForm.value));
    } catch (e) { }

  }

  // initArr() {
  //   this.APIService.getRoofs().subscribe(
  //     data => {
  //       let ar = new Array(data)
  //       // let vika = ar.pop()
  //       console.log(ar.pop())
  //     }
  //   )
  // }

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

  ngOnInit() { this.setValidators();
    var roofCache = localStorage.getItem('currentRoof');
    if (roofCache) {
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
