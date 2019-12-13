import { Component, OnInit } from '@angular/core';
import { AuthHelperService } from '../auth-helper.service';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { LandingModalComponent } from '../landing-modal/landing-modal.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    public auth: AuthHelperService,
    private router: Router,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog,
  ){
    this.iconRegistry.addSvgIcon(
      'apps',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/apps-24px.svg'));
  }

  ngOnInit() {
  }

  public toHome(): void{
    this.router.navigate(['/']);
  }

  public logout(): void{
    this.auth.setLogin(false);
    if(this.auth.getAdmin()){
      this.auth.setAdmin(false);
    }
    this.router.navigate(['/']);
  }
  public login(): void{
    this.openLoginDialog();
  }
  public toAdmin():void{
    if(this.auth.getAdmin()){
      this.router.navigate(['/admin']);
    }
  }
  public toOwn():void{
    if(this.auth.getLogin()){
      this.router.navigate(['/private_page']);      
    }
  }
  public toCreate():void{
    this.router.navigate(['/mainpage']);
  }
  public openLoginDialog():void {
    this.dialog.open(LandingModalComponent);
  }

}
