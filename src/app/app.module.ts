import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputWindowsComponent } from './input-windows/input-windows.component';
import { InputFormComponent } from './input-form/input-form.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LandingComponent } from './landing/landing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { LandingModalComponent } from './landing-modal/landing-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    InputWindowsComponent,
    InputFormComponent,
    BreadcrumbComponent,
    LandingComponent,
    LandingModalComponent
  ],
  entryComponents: [
    LandingModalComponent
  ],
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
