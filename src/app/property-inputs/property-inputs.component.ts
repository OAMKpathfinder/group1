import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormControl } from "@angular/forms";
import { APIService } from '../api-service.service'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-property-inputs',
  templateUrl: './property-inputs.component.html',
  styleUrls: ['./property-inputs.component.css']
})
export class PropertyInputsComponent {
  private dateEdit: boolean = false;
  private dateValue: number = 1970;

  onMove(event: any) {
    this.dateValue = event.target.value;
  }
  onDown() { this.dateEdit = true; }
  onUp() { this.dateEdit = false; }

}