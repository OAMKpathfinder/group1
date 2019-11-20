import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {path: 'mainpage', component: MainpageComponent},
  {path: 'landing', component: LandingComponent},
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
