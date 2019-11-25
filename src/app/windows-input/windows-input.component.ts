import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from "@angular/forms";
import { APIService } from '../api-service.service'

@Component({
  selector: 'app-windows-input',
  templateUrl: './windows-input.component.html',
  styleUrls: ['./windows-input.component.css']
})

export class WindowsInputComponent implements OnInit {
  //Initialising form variables
  windowForm: FormGroup;
  name: string = '';
  uKnown: boolean = false;
  uValue: number;
  materials: string = '';
  area: string = '';
  protected: string = '';
  bridgeValue: number;
  interaction: boolean = false;

  constructor(
    private APIService: APIService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<WindowsInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    //Initialising form and validation 
    //TODO further validation  
    this.windowForm = fb.group({
      'name': [null, Validators.required],
      'uKnown': [null, Validators.required],
      'uValue': [null],
      'materials': [null],
      'area': [null],
      'bridgeValue': [null, Validators.required],
      'protected': [null, Validators.required]
    });
  }

  //Checking if radio button checked and showing valid options
  onChange(event: any) {
    if (typeof event.source.name !== undefined &&
      /mat-radio-group/i.test(event.source.name)) {
      this.interaction = true;
      this.uKnown = event.value == 'true' ? true : false;
    } else { }
  }

  //Saving the form and closing window
  saveWindow() {
    this.dialogRef.close();
    //Here is the form result to send to the API
    this.APIService.addWindowSingle(this.windowForm.value)
      .subscribe(data => {
        console.log(data)
      });
  }

  //Canceling the inputs and closing window
  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  //Testing GET 
  // this.APIService.getAllWindowSingle().subscribe(
  //     data => {
  //         console.log(data)
  //     }
  // );
  //Testing GET by ID
  // this.APIService.getWindowSingle(2).subscribe(
  //   data => {
  //     console.log(data)
  //   }
  // );
  }

}
