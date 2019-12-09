import { Component, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { AdminEditComponent } from '../admin-edit/admin-edit.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  userDisplayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'password'];
  userSource = new MatTableDataSource(USER_ELEMENT_DATA);

  propDisplayedColumns: string[] = ['id', 'owner', 'name', 'country', 'era'];
  propSource = new MatTableDataSource(PROP_ELEMENT_DATA);

  materialDisplayedColumns: string[] = ['id', 'material', 'thickness', 'application'];
  materialSource = new MatTableDataSource(MATERIAL_ELEMENT_DATA);

  defaultDisplayedColumns: string[] = ['id', 'part', 'materials', 'country', 'era', 'values'];
  defaultSource = new MatTableDataSource(DEFAULT_ELEMENT_DATA);

  downloadsDisplayedColumns: string[] = ['id', 'user', 'property', 'download', 'email'];
  downloadsSource = new MatTableDataSource(DOWNLOADS_ELEMENT_DATA);

  @ViewChild('sorter0', { static: true }) sort0: MatSort;
  @ViewChild('sorter1', { static: true }) sort1: MatSort;
  @ViewChild('sorter2', { static: true }) sort2: MatSort;
  @ViewChild('sorter3', { static: true }) sort3: MatSort;
  @ViewChild('sorter4', { static: true }) sort4: MatSort;

  show: number = 0;
  elValues: any[];
  elKeys: any[];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.userSource.sort = this.sort0;
    this.propSource.sort = this.sort1;
    this.materialSource.sort = this.sort2;
    this.defaultSource.sort = this.sort3;
    this.downloadsSource.sort = this.sort4;
  }

  viewChange(id: number): void {
    this.show = id;
  }

  onEdit(el: any): void {
    let type = this.show;
    let id = el.id;
    this.dialog.open(AdminEditComponent, { data: { el, type, id }, width: '350px', maxHeight: '600px' });
  }

  onNew(fields: any): void {
    let id: number = -1;
    let type = this.show;
    this.dialog.open(AdminEditComponent, { data: { fields, type, id }, width: '350px', maxHeight: '600px' });
  }

}
//TODO Get real data from API
/* Static data  */
// User Data
export interface userElement {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
const USER_ELEMENT_DATA: userElement[] = [
  { id: 1, firstName: 'Dave', lastName: 'Le Test', email: 'wetest@emails.com', password: 'encryptedBeyondBelief' },
  { id: 2, firstName: 'Dave', lastName: 'Le Test', email: 'wetest@emails.com', password: 'encryptedBeyondBelief' },
  { id: 3, firstName: 'Dave', lastName: 'Le Test', email: 'wetest@emails.com', password: 'encryptedBeyondBelief' },
  { id: 4, firstName: 'Dave', lastName: 'Le Test', email: 'wetest@emails.com', password: 'encryptedBeyondBelief' },
  { id: 5, firstName: 'Dave', lastName: 'Le Test', email: 'wetest@emails.com', password: 'encryptedBeyondBelief' }
]

//Property Data
export interface propElement {
  id: number;
  owner: string;
  name: string;
  country: string;
  era: number;
};
const PROP_ELEMENT_DATA: propElement[] = [
  { id: 1, owner: 'John McDonald', name: 'Little House', country: 'Scotland', era: 1900 },
  { id: 2, owner: 'Jari Kaski', name: 'Iso Koti', country: 'Finland', era: 1970 },
  { id: 3, owner: 'Shamus Oconnel', name: 'Castle Grande', country: 'Northern Ireland', era: 1890 },
  { id: 4, owner: 'Berk Jornesson', name: 'Fortress Test', country: 'Iceland', era: 2000 },
  { id: 5, owner: 'Willie Reynolds', name: 'Big House', country: 'Scotland', era: 1940 }
]

// Material Data
export interface materialElement {
  id: number;
  material: string;
  thickness: number;
  application: string;
};
const MATERIAL_ELEMENT_DATA: materialElement[] = [
  { id: 1, material: 'Wood', thickness: 30, application: 'Doors' },
  { id: 2, material: 'Glass', thickness: 70, application: 'Doors' },
  { id: 3, material: 'Foo', thickness: 240, application: 'Roof' },
  { id: 4, material: 'Bar', thickness: 130, application: 'Outer Wall' },
  { id: 5, material: 'Baz', thickness: 50, application: 'Windows' }
]

// Defaults Data
export interface defaultsElement {
  id: number;
  part: string;
  materials: string;
  country: string;
  era: number;
  values: number;
};
const DEFAULT_ELEMENT_DATA: defaultsElement[] = [
  { id: 1, part: 'Window', materials: 'Glass', country: 'Scotland', era: 1900, values: 95 },
  { id: 2, part: 'Door', materials: 'Wood', country: 'Iceland', era: 1950, values: 95 },
  { id: 3, part: 'Window', materials: 'Plastic', country: 'Scotland', era: 2000, values: 95 },
  { id: 4, part: 'Outer Wall', materials: 'Stone', country: 'Finland', era: 1970, values: 95 },
  { id: 5, part: 'Roof', materials: 'Slate', country: 'Scotland', era: 1980, values: 95 },
  { id: 6, part: 'Outer Wall', materials: 'Timber', country: 'Northern Ireland', era: 1890, values: 95 },
]

// Downloads Data
export interface downloadElement {
  id: number;
  user: string;
  property: string;
  email: string;
  download: any;
};
const DOWNLOADS_ELEMENT_DATA: downloadElement[] = [
  { id: 1, user: 'John McDonald', property: 'Little House', email: 'Scotland@email.com', download: 2 },
  { id: 2, user: 'Jari Kaski', property: 'Iso Koti', email: 'Finland@email.com', download: 3 },
  { id: 3, user: 'Shamus Oconnel', property: 'Castle Grande', email: 'NorthernIreland@email.com', download: 4 },
  { id: 4, user: 'Berk Jornesson', property: 'Fortress Test', email: 'Iceland@email.com', download: 5 },
  { id: 5, user: 'Willie Reynolds', property: 'Big House', email: 'Scotland@email.com', download: 7 }
]



