import { Component, OnInit, Inject } from '@angular/core';
import { faLeaf, faHome, faCalculator } from '@fortawesome/free-solid-svg-icons';
import { LandingModalComponent } from '../landing-modal/landing-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  faLeaf = faLeaf;
  faHome = faHome;
  faCalculator = faCalculator;
  title = "PathFinder";

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(LandingModalComponent);
  }

  ngOnInit() {}
}