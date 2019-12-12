import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { APIService } from '../api-service.service';

@Component({
  selector: 'app-windows-input',
  templateUrl: './windows-input.component.html',
  styleUrls: ['./windows-input.component.css']
})

export class WindowsInputComponent implements OnInit {
  //Initialising form variables
  windowForm: FormGroup;
  name: string = '';
  uKnown: string;
  uValue: number;
  materials: string = '';
  area: string = '';
  protected: string = '';
  bridgeValue: number;
  interaction: boolean = false;
  uCheck: boolean;
  title: string = 'Add A New Window';
  
  //ID parameter for update function
  id: number = this.data.window.id;

  constructor(
    private APIService: APIService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<WindowsInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    let namePattern = '[a-zA-z0-9()_ -]*';
    let numberPattern = "^[0-9.]*";
    //Initialising form and validation 
    this.windowForm = fb.group({
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
      if (this.data.window == 0) {
        localStorage.setItem('currentWindow', JSON.stringify(this.windowForm.value));
      }
    } catch (e) { }
  }
  //Saving the form and closing window
  saveWindow() {
    localStorage.removeItem('currentWindow');
    this.dialogRef.close();
    //Here is the form result to send to the API
    if (this.data.window == 0) {
      this.APIService.addWindowSingle(this.windowForm.value)
        .subscribe(data => { console.log(data) });
    } else if (this.data.window != 0) {
      this.APIService.updateWindow(this.windowForm.value,this.id)
        .subscribe(data => { console.log(data) })
    }
  }
  //Canceling the inputs and closing window
  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.setValidators();
    var windowCache = localStorage.getItem('currentWindow');
    if (windowCache && this.data.window == 0) {
      const windowCacheP = JSON.parse(windowCache)
      this.windowForm.setValue({
        area: windowCacheP['area'],
        name: windowCacheP['name'],
        uValue: windowCacheP['uValue'],
        uKnown: windowCacheP['uKnown'],
        materials: windowCacheP['materials'],
        protected: windowCacheP['protected'],
        bridgeValue: windowCacheP['bridgeValue'],
      });
      if (windowCacheP['uKnown'] == 'true') { this.uCheck = true }
      if (windowCacheP['uKnown'] !== null) { this.interaction = true }
    } else if (this.data.window != 0) {
      this.title = 'Edit Window';
      let editData = this.data.window;
      let uEdit = editData.uValue > 0 ? 'true' : 'false';
      console.log(editData.protected)
      this.windowForm.setValue({
        area: editData.area,
        name: editData.name,
        uValue: editData.uvalue.toString(),
        uKnown: uEdit,
        materials: editData.materials,
        protected: editData.protected.toString(),
        bridgeValue: editData.bridgevalue,
      });
      if (uEdit) { this.uCheck = true }
      if (uEdit !== null) { this.interaction = true }
    }
  }
  //Conditional Validation
  setValidators() {
    let numberPattern = "^[0-9.]*";
    const uKnownValid = this.windowForm.get('uKnown');
    const uValueValid = this.windowForm.get('uValue');
    const areaValid = this.windowForm.get('area');
    const materialsValid = this.windowForm.get('materials');
    this.windowForm.get('uKnown').valueChanges
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
