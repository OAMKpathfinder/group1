import { Component, OnInit, Inject } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { LandingModalComponent } from '../landing-modal/landing-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  faLeaf = faLeaf;
  title = "PathFinder";

  constructor(public dialog: MatDialog) {}

  /**
   * Some fitting picture to 
   * getUrl function
   */
  getUrl() {
    return "url()";
  }
  openDialog() {
    this.dialog.open(LandingModalComponent);
  }

  ngOnInit() {}
}