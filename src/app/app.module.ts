import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { LandingModalComponent } from './landing-modal/landing-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingModalComponent
  ],
  /**
   * If you are getting an error about entry component, add the code below ;)
   */
  entryComponents: [
    LandingModalComponent
  ],
  // exports: [
  //   LandingModalComponent
  // ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
