import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from "@angular/forms";
import { APIService } from '../api-service.service'

@Component({
  selector: 'app-wall-input',
  templateUrl: './wall-input.component.html',
  styleUrls: ['./wall-input.component.css']
})
export class WallInputComponent implements OnInit {
  //Initialising form variables
  wallForm: FormGroup;
  uKnown: string;
  uValue: number;
  materials: string = '';
  area: string = '';
  protected: string = '';
  interaction: boolean = false;
  uCheck: boolean;
  title: string = "Add an Outer Wall"

  // ID parameter for edit function
  id: number = this.data.wall.id;

  constructor(
    private APIService: APIService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<WallInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      //Initialising form and validation 
      //TODO further validation  
      this.wallForm = fb.group({
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
        if (this.data.wall == 0) {
          localStorage.setItem('currentWall', JSON.stringify(this.wallForm.value));
        }
      } catch (e) { }
    }

  onCancel(): void {
    this.dialogRef.close();
  }

  saveWall(): void {
    this.dialogRef.close();
    if (this.data.wall == 0) {
      this.APIService.addOuterWall(this.wallForm.value)
      .subscribe(data => {
        // for debugging
        console.log(data)
      });
    } else if (this.data.wall != 0) {
      this.APIService.updateWall(this.wallForm.value, this.id)
        .subscribe(res => {
          console.log(res)
        });
    }
  }
  
  ngOnInit() {
    console.log(this.data);
    this.setValidators();
    var wallCache = localStorage.getItem('currentWall');
    if (wallCache && this.data.wall == 0) {
      const wallCacheP = JSON.parse(wallCache)
      this.wallForm.setValue({
        uValue: wallCacheP['uValue'],
        uKnown: wallCacheP['uKnown'],
        area: wallCacheP['area'],      
        materials: wallCacheP['materials'],
        protected: wallCacheP['protected']
      });
      if (wallCacheP['uKnown'] == 'true') { this.uCheck = true }
      if (wallCacheP['uKnown'] !== null) { this.interaction = true }
    } else if (this.data.wall !== 0) {
      this.title = "Edit Outer Wall";
      let editData = this.data.wall;
      let uEdit = editData.uValue > 0 ? 'true' : 'false';
      console.log(editData.protected);
      this.wallForm.setValue({
        area: editData.area,
        uValue: editData.uvalue,
        uKnown: uEdit,
        materials: editData.materials,
        protected: editData.protected.toString()
      });
      if (uEdit) {
        this.uCheck == true
      }
      if (uEdit !== null) {
        this.interaction = true
      }
    }
  }
  //Conditional Validation
  setValidators() {
    let numberPattern = "^[0-9.]*";
    const uKnownValid = this.wallForm.get('uKnown');
    const uValueValid = this.wallForm.get('uValue');
    const areaValid = this.wallForm.get('area');
    const materialsValid = this.wallForm.get('materials');
    this.wallForm.get('uKnown').valueChanges
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
