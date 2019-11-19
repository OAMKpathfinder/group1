import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    window.addEventListener("scroll", event =>{
      let current = window.pageYOffset;

      let el1Top = document.getElementById("el1").offsetTop 
      let el2Top = document.getElementById("el2").offsetTop 
      let el3Top = document.getElementById("el3").offsetTop 

      let el1Height = el2Top - el1Top; 
      let el2Height = el3Top - el2Top; 
      let el3Height = document.body.scrollHeight - el3Top; 

      if(current >= el1Top && current < (el1Top + el1Height ) ){
          document.getElementById("el1-bc").classList.add("active");
          document.getElementById("el2-bc").classList.remove("active");
          document.getElementById("el3-bc").classList.remove("active");
      }
      else if(current >= el2Top && current < (el2Top + el2Height ) ){
          document.getElementById("el2-bc").classList.add("active");
          document.getElementById("el1-bc").classList.remove("active");
          document.getElementById("el3-bc").classList.remove("active");
      }
      else if(current >= el3Top && current < (el3Top + el3Height ) ){
          document.getElementById("el3-bc").classList.add("active");
          document.getElementById("el1-bc").classList.remove("active");
          document.getElementById("el2-bc").classList.remove("active");
      }

    });

  }

}
