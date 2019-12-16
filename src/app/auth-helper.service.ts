import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//From here might be handled all the user info when logged in

export class AuthHelperService {


  //In principle, better to be private so to be unaccessable
  public isLoggedIn: boolean ;
  public isAdmin: boolean ;
  private result: boolean;
  private resultView: string;

  constructor(){
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.result = false;
    this.resultView = 'hidden';
  }


  //Introducing two ways of handling login, with taking parameter or not
  public login(): void{
    this.isLoggedIn = true;
  }
  public logout(): void{
    this.isLoggedIn = false;
  }
  public setLogin(login: boolean): void{
    this.isLoggedIn = login;
  }

  public toggle(): void{
    this.isLoggedIn = !this.isLoggedIn;
  }
  public setAdmin(admin: boolean): void{
    this.isAdmin = admin;
  }
  public unsetAdmin(): void{
    this.isAdmin = false;
  }
  public toggleAdmin(): void{
    this.isAdmin = !this.isAdmin;
  }
  public getLogin(): boolean{
    return this.isLoggedIn;
  }
  public getAdmin(): boolean{
    return this.isAdmin;
  }

  public getResult(): boolean{
    return this.result;
  }

  public setResult(result: boolean): void{
    this.result = result;
  }

  public getResultView(): string{
    return this.resultView;
  }
  public setResultView(view:string): void{
    this.resultView = view;
  }
}
