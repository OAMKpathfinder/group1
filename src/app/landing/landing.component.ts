import { Component, OnInit, OnDestroy, OnChanges, SimpleChange } from '@angular/core';
import { faLeaf, faHome, faCalculator } from '@fortawesome/free-solid-svg-icons';
import { LandingModalComponent } from '../landing-modal/landing-modal.component';
import { MatDialog } from '@angular/material';
import { AuthHelperService } from '../auth-helper.service';

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit, OnDestroy {
  faLeaf = faLeaf;
  faHome = faHome;
  faCalculator = faCalculator;
  title = "PathFinder";
  private navIcon: HTMLElement;

  constructor(
    public dialog: MatDialog,
    public auth: AuthHelperService,
  ){
    this.navIcon = (<HTMLElement> document.getElementById('nav-icon'))
  }

  openDialog() {
    this.dialog.open(LandingModalComponent);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

  ngOnInit(){
    this.navIcon.style.color = "white";
  }
  
  ngOnDestroy(){
    this.navIcon.style.color = "";
  }
}