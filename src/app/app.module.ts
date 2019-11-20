import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputWindowsComponent } from './input-windows/input-windows.component';
import { InputFormComponent } from './input-form/input-form.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    InputWindowsComponent,
    InputFormComponent,
    BreadcrumbComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
