import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from "@angular/forms";
import { APIService } from '../api-service.service'

@Component({
  selector: 'app-ground-input',
  templateUrl: './ground-input.component.html',
  styleUrls: ['./ground-input.component.css']
})
export class GroundInputComponent implements OnInit {
  //Initialising form variables
  groundForm: FormGroup;
  uKnown: string;
  uValue: number;
  materials: string = '';
  area: string = '';
  protected: string = '';
  interaction: boolean = false;
  uCheck: boolean;

  constructor(
    private APIService: APIService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<GroundInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      //Initialising form and validation 
      //TODO further validation  
      this.groundForm = fb.group({
        'uKnown': [null, Validators.required],
        'uValue': [null],
        'materials': [null],
        'area': [null],
        'protected': [null, Validators.required]
      });
    }

  //Checking if radio button checked and showing valid options
  onChange(uRadio: boolean, event: any) {
    if (uRadio) {
      this.interaction = true;
      this.uKnown = event.value;
      this.uCheck = event.value == 'true' ? true : false
      console.log(this.uKnown, this.uCheck)
    } else { }
    try {
      //Saving form state
      localStorage.setItem('currentGround', JSON.stringify(this.groundForm.value));
    } catch (e) { }
  }
  
  onCancel(): void {
    this.dialogRef.close();
  }

  saveGround(): void {
    localStorage.removeItem('currentGround');
    let id = this.APIService.getPropertyId();
    let properties = {"properties": id}
    this.dialogRef.close();
    Object.assign(this.groundForm.value, properties)
    this.APIService.addGroundFloor(this.groundForm.value)
    .subscribe(data => {
      console.log(data)
    });
  }

  ngOnInit() { this.setValidators();
    var groundCache = localStorage.getItem('currentGround');
    if (groundCache) {
      const groundCacheP = JSON.parse(groundCache)
      this.groundForm.setValue({
        area: groundCacheP['area'],
        uValue: groundCacheP['uValue'],
        uKnown: groundCacheP['uKnown'],
        materials: groundCacheP['materials'],
        protected: groundCacheP['protected']
      });
      if (groundCacheP['uKnown'] == 'true') { this.uCheck = true }
      if (groundCacheP['uKnown'] !== null) { this.interaction = true }
    }
  }
  //Conditional Validation
  setValidators() {
    let numberPattern = "^[0-9.]*";
    const uKnownValid = this.groundForm.get('uKnown');
    const uValueValid = this.groundForm.get('uValue');
    const areaValid = this.groundForm.get('area');
    const materialsValid = this.groundForm.get('materials');
    this.groundForm.get('uKnown').valueChanges
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
