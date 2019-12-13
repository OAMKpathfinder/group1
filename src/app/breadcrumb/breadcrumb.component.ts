import { Component, OnInit, Input } from '@angular/core';
import { AuthHelperService } from '../auth-helper.service';

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
  imgSrc: string = "";

  private groundImgSrc: string = "../../assets/img/gif/floor.gif";
  private wallImgSrc: string = "../../assets/img/gif/wall.gif";
  private doorImgSrc: string = "../../assets/img/gif/door.gif";
  private windowImgSrc: string = "../../assets/img/gif/window.gif";
  private roofImgSrc: string = "../../assets/img/gif/roof.gif";

  private liveResult: string = 'A';

  constructor(
    public auth: AuthHelperService
  ) { }

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

  srcChange(phase:string): void{
    switch(phase){
      case "floor":
        this.imgSrc = this.groundImgSrc;
        break;
      case "outerwall":
        this.imgSrc = this.wallImgSrc;
        break;
      case "roof":
        this.imgSrc = this.roofImgSrc;
        break;
      case "doors":
        this.imgSrc = this.doorImgSrc;
        break;
      case "windows":
        this.imgSrc = this.windowImgSrc;
        break;
      default:
        this.imgSrc = "";
    }
  }

  ngOnInit() {
    
    for(let i = 0; i<this.ids.length; i++){
      this.properties.push({
        "id":this.ids[i],
        "phase":this.phases[i],
        "phaseToUpperCase":this.phases[i].toUpperCase(),
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
      this.srcChange(this.currentDiv);
    });
    
  }

  ngAfterViewInit(){
    document.getElementById(this.phases[0]).classList.add("active");
    this.currentDiv = this.phases[0];
    this.activeClassOnly(this.currentDiv+"-id-class");
  }
  
  scrollToActive(): void{
    let current = window.pageYOffset;
    let total = document.body.scrollHeight;
    for(let j = 0; j<this.ids.length;j++){
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
