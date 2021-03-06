import { Component, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog, MatTable } from '@angular/material';
import { ModalWindowComponent } from '../modal-window/modal-window.component'; 
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { ChartModalComponent } from '../chart-modal/chart-modal.component';
import { Router } from '@angular/router';

export interface ResultElement {
  property: string,
  img: string,
  date: string,
  modal: number,
  window: object[],
  door: object[],
  other: object[],
  function: string[],
  description: string,
  data: object[],
  suggestion: object[]
}

export class TableExpandableRows {
  dataSource = dummy_data;
  columnsToDisplay: string[] = ['property', 'img', 'date','modal','window','door','other','function'];
  expandedElement: ResultElement | null;
}

function getRandom(from:number, to:number, decimal:number): number{
  return Math.floor(Math.random() * (from - to) + to) / decimal;
}
function getBigRandom(){
  return Math.floor(Math.random() * (50000 - 30000) + 30000) / 10;
}
function getRandomBoolean(){
  let ran = Math.floor(Math.random() * (10 - 1) + 1);
  if(ran%2 === 0){
    return true;
  }
  else{
    return false;
  }
}

let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const actions = ['detail' ,'duplicate','delete'];

//In this section, dummy data is just generated directly here supposed to be handled in service

let dataObj = [
  {
    'part': "Floor",
    'value': getRandom(10,2,10)
  },
  {
    'part':"Wall",
    'value': getRandom(10,2,10)
  },
  {
    'part':"Roof",
    'value': getRandom(10,2,10)
  }
]

let doorObj = [
  {
    'part':"Main door, brown, black handle",
    'value': getRandom(10,2,10)
  },
  {
    'part':"Back door, white",
    'value': getRandom(10,2,10)
  },
  {
    'part':"Side door, on the left",
    'value': getRandom(10,2,10)
  },
]
let windowObj = [
  {
    'part':"Main Window, on the enterance, left",
    'value': getRandom(10,2,10)
  },
  {
    'part':"Kitchen, double sized",
    'value': getRandom(10,2,10)
  },
  {
    'part':"Living room, center of the main wall A",
    'value': getRandom(10,2,10)
  },
  {
    'part':"Living room, center of the main wall B",
    'value': getRandom(10,2,10)
  },
  {
    'part':"Living room, center of the main wall C",
    'value': getRandom(10,2,10)
  },
  {
    'part':"Living room, center of the main wall D",
    'value': getRandom(10,2,10)
  },
]
let otherObj = [
  {
    'part':"Cost",
    'value': getBigRandom()
  },
  {
    'part':"Hjoht",
    'value': getRandom(10,2,10)
  },
  {
    'part':"Piped",
    'value': getRandomBoolean()
  },
]
let suggestionObj = [
  {
    'priority':getRandom(10,1,1),
    'part':windowObj[ getRandom(5,0,1).toFixed(0) ].part,
    'percent':getRandom(1000,300,100),
    'cost':getBigRandom()
  },
  {
    'priority':getRandom(10,1,1),
    'part':windowObj[ getRandom(5,0,1).toFixed(0) ].part,
    'percent':getRandom(1000,300,100),
    'cost':getBigRandom()
  },
]

function getRandomSuggestion(index:number): object[]{
  let result = [];
  let used = [];
  for(let i = 0; i<index; i++){
    let num = getRandom(5,0,1).toFixed(0);
    if(!used.includes(num)){
      let obj = {
        'priority':getRandom(10,1,1),
        'part':windowObj[num].part,
        'percent':getRandom(1000,300,100),
        'cost':getBigRandom()
      }
      result.push(obj);
    }
  }
  return result;
}
function getRandomDoorSuggestion(index:number): object[]{
  let result = [];
  let used = [];
  for(let i = 0; i<index; i++){
    let num = getRandom(2,0,1).toFixed(0);
    if(!used.includes(num)){
      let obj = {
        'priority':getRandom(10,1,1),
        'part':doorObj[num].part,
        'percent':getRandom(1000,300,100),
        'cost':getBigRandom()
      }
      result.push(obj);
    }
  }
  return result;
}
function getRandomOtherSuggestion(index:number): object[]{
  let result = [];
  let used = [];
  for(let i = 0; i<index; i++){
    let num = getRandom(2,0,1).toFixed(0);
    if(!used.includes(num)){
      let obj = {
        'priority':getRandom(10,1,1),
        'part':dataObj[num].part,
        'percent':getRandom(1000,300,100),
        'cost':getBigRandom()
      }
      result.push(obj);
    }
  }
  return result;
}

let dummy_data: ResultElement[] = [
  {
    property: 'Old Building A', img: 'building_img_A', date: '27/11/2019', 
    modal: 1, window: windowObj, door: doorObj, other: otherObj, function: actions,
    description: lorem, data:dataObj, suggestion: getRandomSuggestion(3)
  },
  {
    property: 'Old Building B', img: 'building_img_B', date: '2/12/2019', 
    modal: 2, window: windowObj, door: doorObj, other: otherObj, function: actions,
    description: lorem, data:dataObj, suggestion: getRandomDoorSuggestion(2)
  },
  {
    property: 'Old Building C', img: 'building_img_C', date: '1/12/2019', 
    modal: 3, window: windowObj, door: doorObj, other: otherObj, function: actions,
    description: lorem, data:dataObj, suggestion: getRandomOtherSuggestion(2)
  },
]


@Component({
  selector: 'app-result-whole-private',
  templateUrl: './result-whole-private.component.html',
  styleUrls: ['./result-whole-private.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger("selectAnimation", [
      // this defines the "resting" styles for the "visible" state
      // (i.e., what styles the message element has when visible)
      state(
         "visible",
         style({ opacity: 0.9, display: "table-cell" })
        ),        
        // this defines the "resting" styles for the "hidden" state.
        // (i.e., what styles the message element has when hidden)
      state(
          "hidden",
          style({ opacity: 0, display: "table-cell"})
      ),

      // transition from "hidden" to "visible" states using an animation
      transition("hidden => visible", animate("300ms ease-in")),

      // transition from "visible" to "hidden" similarly
      transition('visible => hidden', animate('300ms ease-out'))
   ]),
  ],
})

export class ResultWholePrivateComponent{

  //To refresh table/re-render, required to have element which is accessible
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  dataSource = new MatTableDataSource(dummy_data);
  // dataSource = dummy_data;
  columnsToDisplay : string[] = ['select','property', 'img', 'date','modal','window','door','other','function'];
  expandedElement: ResultElement | null;

  selection = new SelectionModel<ResultElement>(true, []);

  select_col: boolean = false;

  selected: string = 'select';

  checkedToCompare = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,){
  }

  actionTo(el:string, e:any, i:number): void {
    e.stopPropagation();
    if(el === 'duplicate'){
      this.duplicate(i);
    }
    else if(el === 'delete'){
      this.delete(i);
    }
    else if(el === 'compare'){
      this.compare()
    }
    else if(el === 'select'){
      this.bringSelect();
    }
    else if(el === 'detail'){
      this.detail();
    }
  }

  bringSelect(){
    if(this.select_col){
      this.select_col = false;
      this.selected = 'select';
    }
    else{
      this.selection.clear();
      this.checkedToCompare.length = 0;
      this.select_col = true;
      this.selected = 'compare';
    }
  }

  onCheck($event, row){
    $event.stopPropagation();
    const numSelected = this.selection.selected.length;
    
    if(this.checkedToCompare.length != 2 && numSelected != 2 ){
      this.checkedToCompare.push(row);
    }
    else if (this.checkedToCompare.length >= 3 && numSelected >= 3 ){
      window.alert("Currently comparing only 2 properties supports!");
      this.selection.clear();
    }
  }

  detail(): void{
    this.router.navigate(['/mainpage']);
  }
  
  compare(){
    const numSelected = this.selection.selected.length;

    if(this.checkedToCompare.length == 2  && numSelected == 2 ){
      this.openChartDialog(this.checkedToCompare);
      this.bringSelect();
      this.selection.clear();
    }
    else if(this.checkedToCompare.length == 0  && numSelected == 0 ){
      this.bringSelect();
      this.selection.clear();
      this.checkedToCompare.length = 0;
    }
    else{
      window.alert("Required to have two selected for comparing");
      this.selection.clear();
      this.checkedToCompare.length = 0;
    }
  }

  
  duplicate(i:number){
    //method 1. duplicating selected rows and refresh the table
    //Introduced in Angular Material 7/8, required to have dependencies - ViewChild, MatTable
    let duplicate = this.deepCopy(dummy_data[i]);
    duplicate.property = duplicate.property + " Copy " + this.checkNumber(duplicate.property);
    this.dataSource.data.push(duplicate);
    this.table.renderRows();
  }
  delete(i:number){
    if(window.confirm("Are you sure to delete selected property?")){
      this.dataSource.data.splice(i,1);
      this.table.renderRows();
    }
  }

  openDialog(property:string, id:number, data:object[], IsUValue:boolean, e): void{
    //Passing 5 parameters,
    //property, data, id to form inside modal panel values
    //isUValue to decide format of inside modal panel prefix/type
    //event to prevent trigger expand
    e.stopPropagation();
    this.dialog.open(ModalWindowComponent, {data:{'data':data, 'property':property, 'id':id, isUValue: IsUValue},width: '350px', maxHeight: '550px'});
  }
  openChartDialog(data): void{
    this.dialog.open(ChartModalComponent, {data: {'data':data} , width: '34em', height: '36em'});
  }

  //Here is for the duplicating the object to insert rows
  deepCopy(targetObj): ResultElement{
    let clone: ResultElement = {
      property: targetObj.property, img: targetObj.img, date: targetObj.date, 
      modal: targetObj.modal, window: targetObj.window, door: targetObj.door, other: targetObj.other, function: targetObj.function,
      description: targetObj.description, data:targetObj.data, suggestion: targetObj.suggestion
    }
    return clone;
  }

  //For renaming the duplicated rows property
  //check original property name, renamed number and then add the number series
  checkNumber(property:string){
    let result = [];
    let filtered = [];
    for(let i = 0; i<this.dataSource.data.length; i++){
      if(this.dataSource.data[i].property.includes(property)){
        result.push(this.dataSource.data[i].property)
      }
    }
    if(result.length>0){
      if(result.length == 1){
        return 1;
      }
      else{
        for(let j = 0; j < result.length; j++){
          if(this.hasNumber(result[j][result[j].length-2,result[j].length-1])){
            let numberGot = result[j][result[j].length-2,result[j].length-1].replace(/[^0-9]/g,'');
            filtered.push(numberGot);
          }
        }
      }
    }
    else{
      return "";
    }
    let biggest = 0;
    if(filtered.length>0){
      if(filtered.length == 1){
        return 2;
      }
      else{
        for(let k = 0; k<filtered.length; k++){
          if(filtered[k]>=biggest){
            biggest = parseInt(filtered[k])
          }
        }
      }
    }
    if(biggest != 0){
      return biggest + 1;
    }
    else{
      return "";
    }

  }

  //Check the given string include number or not
  hasNumber(string):boolean {
    return /\d/.test(string);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ResultElement): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.modal + 1}`;
  }

  //Navigate to main page for creating new property
  createNewProperty(): void{
    this.router.navigate(['/mainpage']);
  }
}
