import { Component, OnInit, Input, Inject } from '@angular/core';
import { Door, APIService } from '../api-service.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-door',
  templateUrl: './edit-door.component.html',
  styleUrls: ['./edit-door.component.css']
})
export class EditDoorComponent implements OnInit {

  fromPage: number;
  fromName: string;
  fromUvalue: number;
  fromArea: number;
  fromMaterials: string;
  fromBridgeValue: number;
  fromProtected: boolean;

  fromDialog: string;

  interaction: boolean = false;
  uKnown: boolean = false;

  isNoValue: boolean;

  editForm: FormGroup;

  constructor(
    private APIservice: APIService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.fromPage = data.doorId;
    this.fromName = data.doorName;
    this.fromUvalue = data.doorUvalue;
    this.fromArea = data.doorArea;
    this.fromMaterials = data.doorMaterials;
    this.fromBridgeValue = data.doorBridgeValue;
    this.fromProtected = data.doorProtected;

    this.editForm = fb.group({
      id: [data.doorId],
      name: [data.doorName],
      uValue: [data.doorUvalue],
      area: [data.doorArea],
      materials: [data.doorMaterials],
      bridgeValue: [data.doorBridgeValue],
    });
  }

  onChange(event: any) {
    if (
      typeof event.source.name !== undefined &&
      /mat-radio-group/i.test(event.source.name)
    ) {
      this.interaction = true;
      this.uKnown = event.value == "true" ? true : false;
    }
  }

  editDoor() {
    this.APIservice.updateDoor(this.editForm.value, this.fromPage)
      .subscribe(data => {
        console.log(data)
      });
  }

  ngOnInit() {
    
  }

}
