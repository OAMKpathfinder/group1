import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  title: string = "Admin Edit"
  elValues: string[];
  elKeys: any[];
  elID: number;
  adminEditForm: FormGroup;
  types: string[] = ['User', 'Property', 'Material', 'Default', 'Download']

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<AdminEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.adminEditForm = fb.group({});
  }

  ngOnInit() {
    //Check if editing, adding form controls and data to form
    if (this.data.id >= 0) {
      this.elID = this.data.el.id;
      this.title = "Edit " + (this.types[this.data.type]) + ": ID: " + this.elID;
      this.elKeys = Object.keys(this.data.el).map(i => i)
      this.elValues = Object.keys(this.data.el).map(i => this.data.el[i])
      //TODO Hide, remove ID or make readonly
      // this.elKeys.splice(0, 1);
      this.elKeys.forEach((i) => {
        const fc = new FormControl('');
        this.adminEditForm.addControl(i, fc)
      })
      this.adminEditForm.setValue(this.data.el);
    }
     //Check if new and adding form controls
    else if (this.data.id == -1) {
      this.title = "Add New " + (this.types[this.data.type]);
      this.elKeys = this.data.fields;
      this.elKeys.forEach((i) => {
        const fc = new FormControl('');
        this.adminEditForm.addControl(i, fc)
      })
    }
  }

  //Save new or edited data (id == -1) == new / else editing
  onSave(): void {
    this.dialogRef.close();
    let id = { "id": this.elID }
    Object.assign(this.adminEditForm.value, id)
    console.log(this.adminEditForm.value)
  }

  //Close dialog without saving
  onCancel(): void {
    this.dialogRef.close();
  }

  ///
  // this.elKeys = this.elKeys.map(i => i.charAt(0).toUpperCase() + i.slice(1))
  ///
}
