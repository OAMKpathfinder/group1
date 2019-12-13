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
  condition: number;
  interaction: boolean = false;
  uCheck: boolean;
  title: string = "Add a Floor"

  //ID parameter for edit function
  id: number = this.data.ground.id;

  constructor(
    private APIService: APIService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<GroundInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.groundForm = fb.group({
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
      console.log(this.uKnown, this.uCheck)
    } else { }
    try {
      //Saving form state
      if (this.data.ground == 0) {
        localStorage.setItem('currentGround', JSON.stringify(this.groundForm.value));
      }
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
    if (this.data.groud == 0) {
      this.APIService.addGroundFloor(this.groundForm.value)
      .subscribe(data => {
        //debug
        console.log(data)
      });
    } else if (this.data.groud != 0) {
      this.APIService.updateGround(this.groundForm.value, this.id)
        .subscribe(res => {
          console.log(res)
        })
    }
  }

  ngOnInit() { 
    console.log(this.data)
    this.setValidators();
    var groundCache = localStorage.getItem('currentGround');
    if (groundCache && this.data.ground == 0) {
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
    } else if (this.data.ground != 0) {
      this.title = 'Edit Ground';
      let editData = this.data.ground;
      let uEdit = editData.uValue > 0 ? 'true' : 'false';
      console.log(editData.protected)
      this.groundForm.setValue({
        area: editData.area,
        uValue: editData.uvalue.toString(),
        uKnown: uEdit,
        materials: editData.materials,
        protected: editData.protected.toString()
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
