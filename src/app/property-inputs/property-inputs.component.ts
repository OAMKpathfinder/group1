import { Component} from '@angular/core';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-property-inputs',
  templateUrl: './property-inputs.component.html',
  styleUrls: ['./property-inputs.component.css']
})
export class PropertyInputsComponent {
  private dateEdit: boolean = false;
  private dateValue: number = 1970;
  private location: string; 

  onMove(event: any) {
    this.dateValue = event.target.value;
  }
  onDown() { this.dateEdit = true; }
  onUp() { this.dateEdit = false; }

  mapClick(id: number){
      switch(id){
          case 0:
            this.location = ": Finland"; 
            break;
          case 1:
            this.location = ": Iceland"; 
            break;
          case 2:
            this.location = ": Scotland"; 
            break;
          case 3:
            this.location = ": Norther Ireland"; 
            break;
          default:
            return ;
        }

    console.log(id)
  }

  onFileSelected(): void {
    //Currently, Angular Material does not support file type input
    //So, button to open hidden input file type click is handling it
    //and below workaround, might handle to show/save image file
     
    const inputNode: any = document.querySelector('#file');
    const inputDisplay: HTMLElement = (<HTMLElement>document.getElementById('fileName'));

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        console.log(e.target.result);
      };
  
      reader.readAsArrayBuffer(inputNode.files[0])
      inputDisplay.innerHTML = inputNode.value;
    }
  }

}