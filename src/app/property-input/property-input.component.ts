import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormControl } from "@angular/forms";
import { APIService } from '../api-service.service'
import { faGlobeEurope} from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';


@Component({
  selector: 'app-property-input',
  templateUrl: './property-input.component.html',
  styleUrls: ['./property-input.component.css']
})
export class PropertyInputComponent implements OnInit {
  faGlobeEurope = faGlobeEurope;
  //Initialising form variables
  propertyForm: FormGroup;
  name: string = '';
  country: string = '';
  era: number ;
  img: string = '';
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private APIService: APIService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PropertyInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
    //Initialising form and validation 
    //TODO further validation  
    this.propertyForm = fb.group({
      'name': [null, Validators.required],
      'country': [null, Validators.required],
      'era': [null, Validators.required],
      'img': [null]
    });
    this.iconRegistry.addSvgIcon(
      'flag-fin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/flag-fin.svg'));
    this.iconRegistry.addSvgIcon(
      'flag-isl',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/flag-isl.svg'));
    this.iconRegistry.addSvgIcon(
      'flag-irl',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/flag-irl.svg'));
    this.iconRegistry.addSvgIcon(
      'flag-nir',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/flag-nir.svg'));
    this.iconRegistry.addSvgIcon(
      'flag-sct',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/flag-sct.svg'));
    this.iconRegistry.addSvgIcon(
      'flag-swe',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/flag-swe.svg'));
  }

  //Canceling the inputs and closing window
  onCancel(): void {
    this.dialogRef.close();
  }
  
  saveProperty() : void{
    this.dialogRef.close();
    this.APIService.addProperty(this.propertyForm.value)
    .subscribe(res =>{
      localStorage.setItem("houseName",`${res.name}`)
      console.log(res);
      if(res){
        this.APIService.getPropertyIdByName(res.name);
      }
      else{
        console.log("Might POST request failed, no any response got! in the property input component");
      }
    });
  }

  ngOnInit() {
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
