import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  {path: 'mainpage', component: MainpageComponent},
  {path: '', component: LandingComponent},
  {path: 'results', component: ResultTableComponent},
  {path: 'admin', component: AdminPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
