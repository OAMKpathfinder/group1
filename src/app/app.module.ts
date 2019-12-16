import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WindowsInputComponent } from './windows-input/windows-input.component';
import { DoorsInputComponent } from './doors-input/doors-input.component';
import { RoofInputComponent } from './roof-input/roof-input.component';
import { OthersInputComponent } from './others-input/others-input.component';
import { GroundInputComponent } from './ground-input/ground-input.component';
import { BridgeInputComponent } from './bridge-input/bridge-input.component';
import { WallInputComponent } from './wall-input/wall-input.component';
import { InputWindowsComponent } from './input-windows/input-windows.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LandingComponent } from './landing/landing.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatRadioModule, MatDialogModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatIconModule, MatSliderModule, MatTableModule, MatSortModule, MatTooltipModule, MatMenuModule} from '@angular/material';
import { LandingModalComponent } from './landing-modal/landing-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './api-service.service';
import { PropertyInputComponent } from './property-input/property-input.component';
import { PropertyInputsComponent } from './property-inputs/property-inputs.component';
import { ResultWholePrivateComponent } from './result-whole-private/result-whole-private.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { ChartModalComponent } from './chart-modal/chart-modal.component';
import { ChartsModule } from 'ng2-charts';
import { ResultTableComponent } from './result-table/result-table.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MatTabsModule } from '@angular/material/tabs';

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
    BreadcrumbComponent,
    LandingComponent,
    LandingModalComponent,
    MainpageComponent,
    PropertyInputComponent,
    ResultWholePrivateComponent,
    ModalWindowComponent,
    SuggestionComponent,
    ChartModalComponent,
    PropertyInputsComponent,
    ResultTableComponent,
    AdminPanelComponent,
    AdminEditComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent
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
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatCheckboxModule,
    ChartsModule,
    MatSliderModule,
    MatSortModule,
    MatTooltipModule,
    MatMenuModule,
    MatTabsModule
  ],
  entryComponents: [
    WindowsInputComponent,
    DoorsInputComponent,
    RoofInputComponent,
    BridgeInputComponent,
    WallInputComponent,
    InputWindowsComponent,
    BreadcrumbComponent,
    GroundInputComponent,
    OthersInputComponent,
    LandingComponent,
    LandingModalComponent,
    MainpageComponent,
    PropertyInputComponent,
    ModalWindowComponent,
    SuggestionComponent,
    ChartModalComponent,
    PropertyInputsComponent,
    AdminEditComponent
  ],
  providers: [ APIService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
