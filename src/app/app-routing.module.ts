import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ResultWholePrivateComponent } from './result-whole-private/result-whole-private.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ResultTableComponent } from './result-table/result-table.component';

const routes: Routes = [
  {path: 'mainpage', component: MainpageComponent},
  {path: 'admin', component: AdminPanelComponent},
  {path: 'private_page', component: ResultWholePrivateComponent},
  {path: '', component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
