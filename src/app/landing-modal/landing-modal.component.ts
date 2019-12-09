import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material'
import { APIService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-modal',
  templateUrl: './landing-modal.component.html',
  providers: [Location, ],
  styleUrls: ['./landing-modal.component.css']
})
export class LandingModalComponent implements OnInit { 

  public message: string;
  location: Location;

  constructor(
    private APIService: APIService,
    private dialogRef: MatDialogRef<LandingModalComponent>,
    private router: Router,
  ){
  }

  nope() {
    this.message = "Nope";
    alert(this.message);
  }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  login(){
    //For simple flow, implemented like this but never ever, pass credentials
    //and validate accounts like this
    const admin = "admin";
    let email = (<HTMLInputElement>document.getElementById("email"));
    let password = (<HTMLInputElement>document.getElementById("password"));
    if(email){
      this.APIService.getPassByEmail(email.value)
      .subscribe( res => {
          if (res["error"]) {
            console.log(res["error"])
          }
          else {
            if (res[0].password === password.value){
              if(email.value === admin){
                this.onCancel();
                this.router.navigate(['/admin']);
              }
              else{
                this.onCancel();
                this.router.navigate(['/private_page']);
              }
            }
            else{
              window.alert("Password or Email was wrong");
            }
          }
        })
      
    }
  }

}
