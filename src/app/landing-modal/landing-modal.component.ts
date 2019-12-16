import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material'
import { APIService } from '../api-service.service';
import { Router } from '@angular/router';
import { AuthHelperService } from '../auth-helper.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-modal',
  templateUrl: './landing-modal.component.html',
  styleUrls: ['./landing-modal.component.css']
})
export class LandingModalComponent implements OnInit { 

  public emailString: any;
  public passwordString: any;
  register: boolean = false;
  authForm: FormGroup;
  mode: string;

  constructor(
    private APIService: APIService,
    private dialogRef: MatDialogRef<LandingModalComponent>,
    private router: Router,
    //It is better to be private so that handle more strictly
    private auth: AuthHelperService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar
    ){
      this.authForm = fb.group({
        email: [null, Validators.required],
        password: [null, Validators.required]
      })
  }

  ngOnInit() {
    this.mode = "Register"
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  setMode() {
    if(this.register == false) {
      this.register = true
      this.mode = "Login"
      console.log("Register Mode")
    } else {
      this.register = false
      this.mode = "Register"
      console.log("Login Mode")
    }
  }

  registerUser() {
    // Simple user registration which authenticates and
    // navigates user to private page 
    // onSubmit and greets the user
    if (this.register == true) {
      let email = (<HTMLInputElement>document.getElementById("email"));
      let password = (<HTMLInputElement>document.getElementById("password"));
      this.emailString = email;
      this.passwordString = password;
      console.log(email.value, password.value)
      console.log(this.authForm.value)
      this.APIService.addUser(this.authForm.value)
        .subscribe(a => {
          console.log(a);
          localStorage.setItem(this.emailString, this.passwordString);
          this.auth.login();
          let snackBarRef = this.snackBar.open(`Welcome, ${a.email}!`, 'Close', {
            duration: 2000
          });
          snackBarRef.onAction().subscribe(() => {
            console.log("Register success")
          });
          this.router.navigate(['/private_page']);
          this.dialogRef.close();
        })
    }

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
