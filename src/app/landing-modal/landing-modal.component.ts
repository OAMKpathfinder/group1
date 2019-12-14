import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material'
import { APIService } from '../api-service.service';
import { Router } from '@angular/router';
import { AuthHelperService } from '../auth-helper.service'; 

@Component({
  selector: 'app-landing-modal',
  templateUrl: './landing-modal.component.html',
  styleUrls: ['./landing-modal.component.css']
})
export class LandingModalComponent implements OnInit { 

  public message: string;
  public emailString: any;
  public passwordString: any;

  constructor(
    private APIService: APIService,
    private dialogRef: MatDialogRef<LandingModalComponent>,
    private router: Router,
    //It is better to be private so that handle more stictly
    private auth: AuthHelperService,
  ){
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
    this.emailString = email;
    this.passwordString = password;

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
                this.auth.login();
                this.auth.setAdmin(false);
              }
              else{
                this.onCancel();
                localStorage.setItem(this.emailString, this.passwordString)
                this.router.navigate(['/private_page']);
                this.auth.login();
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
