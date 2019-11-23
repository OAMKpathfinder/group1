import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from "@angular/forms";
import { APIService } from '../api-service.service'

@Component({
  selector: 'app-property-input',
  templateUrl: './property-input.component.html',
  styleUrls: ['./property-input.component.css']
})
export class PropertyInputComponent implements OnInit {
  //Initialising form variables
  propertyForm: FormGroup;
  name: string = '';
  country: string = '';
  era: string = '';

  constructor(
    private APIService: APIService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PropertyInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
    //Initialising form and validation 
    //TODO further validation  
    this.propertyForm = fb.group({
      'name': [null, Validators.required],
      'country': [null, Validators.required],
      'era': [null, Validators.required],
    });
  }

  //Canceling the inputs and closing window
  onCancel(): void {
    this.dialogRef.close();
  }

  saveProperty() : void{
    
  }

  ngOnInit() {
  }

}
