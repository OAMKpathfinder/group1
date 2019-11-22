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
  uKnown: boolean = false;
  uValue: number;
  materials: string = '';
  area: string = '';
  protected: string = '';
  interaction: boolean = false;
  constructor(
    private APIService: APIService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<WallInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      //Initialising form and validation 
      //TODO further validation  
      this.wallForm = fb.group({
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

  saveWall(): void {
    
  }
  

  ngOnInit() {
  }

}
