import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowsInputComponent } from './windows-input/windows-input.component';
import { DoorsInputComponent } from './doors-input/doors-input.component';
import { RoofInputComponent } from './roof-input/roof-input.component';
import { OthersInputComponent } from './others-input/others-input.component';
import { GroundInputComponent } from './ground-input/ground-input.component';
import { BridgeInputComponent } from './bridge-input/bridge-input.component';
import { WallInputComponent } from './wall-input/wall-input.component';
import { InputWindowsComponent } from './input-windows/input-windows.component';
import { InputFormComponent } from './input-form/input-form.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LandingComponent } from './landing/landing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatRadioModule, MatDialogModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule} from '@angular/material';
import { LandingModalComponent } from './landing-modal/landing-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WindowsInputComponent,
    DoorsInputComponent,
    RoofInputComponent,
    OthersInputComponent,
    GroundInputComponent,
    BridgeInputComponent,
    WallInputComponent,
    InputWindowsComponent,
    InputFormComponent,
    BreadcrumbComponent,
    LandingComponent,
    LandingModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,    
    MatRadioModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatSelectModule
  ],
  entryComponents: [
    WindowsInputComponent,
    DoorsInputComponent,
    RoofInputComponent,
    BridgeInputComponent,
    WallInputComponent,
    GroundInputComponent,
    OthersInputComponent,
    LandingModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
