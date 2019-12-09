import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ResultWholePrivateComponent } from './result-whole-private/result-whole-private.component';

const routes: Routes = [
  {path: 'mainpage', component: MainpageComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'private_page', component: ResultWholePrivateComponent},
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
