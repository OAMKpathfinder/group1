import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  
  @Input() ids: string[] = [];
  @Input() phases: string[] = [];

  properties: any = [];
  private currentDiv: string = null;
  private extra: number = 30;

  constructor() { }

  scrollTo(id:string): void{
    if(document.getElementById(id)){
      this.activeClassOnly(id+"-class")
      document.getElementById(id).scrollIntoView({ block: 'start',  behavior: 'smooth' });
    }
  }

  activeClassOnly(id: string): void{
    for(let i = 0; i < this.ids.length; i++){
      if(document.getElementById(this.ids[i]+"-class").classList.contains("active-bc")){
        document.getElementById(this.ids[i]+"-class").classList.remove("active-bc")
      }
    }
    document.getElementById(id).classList.add("active-bc")
  }

  ngOnInit() {

    for(let i = 0; i<this.ids.length; i++){
      this.properties.push({
        "id":this.ids[i],
        "phase":this.phases[i],
        "numbering": i+1
      });
    }

    window.addEventListener("load", e => {
      this.scrollToActive();
      this.activeClassOnly(this.currentDiv+"-id-class");
    });
    
    window.addEventListener("scroll", event =>{
      this.scrollToActive();
      this.activeClassOnly(this.currentDiv+"-id-class");
    });
    
  }
  
  scrollToActive(): void{
    let current = window.pageYOffset;
    let total = document.body.scrollHeight;
    for(let j = 0; j<this.ids.length;j++){
      // console.log(document.getElementById(this.ids[j]).offsetTop);

      if( j == (this.ids.length-1) ){
        let top = document.getElementById(this.ids[j]).offsetTop;
        let nextTop = total
        let height = nextTop - top;
        if(current >= top-this.extra && current <= (top + height ) ){
          for(let k = 0; k<this.phases.length;k++){
            if(j==k){
              document.getElementById(this.phases[k]).classList.add("active");
              this.currentDiv = this.phases[k];
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
        if(current >= top-this.extra && current <= (top + height ) ){
          for(let k = 0; k<this.phases.length;k++){
            if(j==k){
              document.getElementById(this.phases[k]).classList.add("active");
              this.currentDiv = this.phases[k];
            }
            else{
              document.getElementById(this.phases[k]).classList.remove("active");
            }
          }
        }   
      }
    }
  }

}
