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
  uKnown: boolean = false;
  uValue: number;
  materials: string = '';
  area: string = '';
  protected: string = '';
  interaction: boolean = false;

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

  onChange(event: any) {
    if (typeof event.source.name !== undefined &&
      /mat-radio-group/i.test(event.source.name)) {
      this.interaction = true;
      this.uKnown = event.value == 'true' ? true : false;
    } else { }
  }
  
  onCancel(): void {
    this.dialogRef.close();
  }

  saveGround(): void {

  }

  ngOnInit() {
  }
}
