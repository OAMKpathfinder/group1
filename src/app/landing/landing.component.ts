import { Component, OnInit, Inject } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  faLeaf = faLeaf;
  title = "PathFinder";

  constructor() { }

  getUrl() {
    return "url()";
  }

  ngOnInit() {}

}