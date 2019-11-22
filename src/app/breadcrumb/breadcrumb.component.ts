import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  
  @Input() ids: string[] = [];
  @Input() phases: string[] = [];

  properties: any = [];

  constructor() { }

  ngOnInit() {

    for(let i = 0; i<this.ids.length; i++){
      this.properties.push({
        "id":this.ids[i],
        "phase":this.phases[i],
        "numbering": i+1
      });
    }

    window.addEventListener("scroll", event =>{
      let current = window.pageYOffset;
      let total = document.body.scrollHeight;

      for(let j = 0; j<this.ids.length;j++){
        if( j == (this.ids.length-1) ){
          let top = document.getElementById(this.ids[j]).offsetTop;
          let nextTop = total
          let height = nextTop - top;
          if(current >= top && current <= (top + height ) ){
            for(let k = 0; k<this.phases.length;k++){
              if(j==k){
                document.getElementById(this.phases[k]).classList.add("active");
              }
              else{
                document.getElementById(this.phases[k]).classList.remove("active");
              }
            }
          }
        }
        else{
          let top = document.getElementById(this.ids[j]).offsetTop;
          let nextTop = document.getElementById(this.ids[j+1]).offsetTop;
          let height = nextTop - top;
          if(current >= top && current <= (top + height ) ){
            for(let k = 0; k<this.phases.length;k++){
              if(j==k){
                document.getElementById(this.phases[k]).classList.add("active");
              }
              else{
                document.getElementById(this.phases[k]).classList.remove("active");
              }
            }
          }   
        }
      }
    });

  }

}
