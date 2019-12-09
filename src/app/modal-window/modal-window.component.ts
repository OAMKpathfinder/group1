import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from "@angular/forms";
import { APIService } from '../api-service.service'


@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})

export class ModalWindowComponent implements OnInit {

  //Initialising form variables
  propertyForm: FormGroup;
  interaction: boolean = false;
  uCheck: boolean;
  value: number;
  Title: string;
  elements: object[];
  isUValue: boolean;

  constructor(private APIService: APIService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      //Initialising form and validation 
      //TODO further validation  
      this.propertyForm = fb.group({
        'value': [null]
      });
      this.data = data;
    }

  ngOnInit() {
    this.Title = this.data.property;
    this.elements = this.data.data;
    this.isUValue = this.data.isUValue;
  }

  onCancel(): void {
    console.log("Cancel clicked");
    this.dialogRef.close();
  }
  save(): void{
    console.log("Save clicked");
    this.dialogRef.close();
  }
}
