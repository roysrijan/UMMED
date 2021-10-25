import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LenderComponent } from './lender.component';
import { NewApplicationsrComponent } from './new-applications/new-applications.component';
import { OngoingComponent } from './ongoing/ongoing.component';
import { ReportsComponent } from './reports/reports.component';
import { SchemesComponent } from './schemes/schemes.component';
import { SocailRatingComponent } from './social-rating/social-rating.component';

const routes: Routes = [
    {path:'new-applications', component:NewApplicationsrComponent},
    {path:'ongoing', component:OngoingComponent},
    {path:'social-rating', component:SocailRatingComponent},
    {path:'schemes', component:SchemesComponent},
    {path:'reports', component:ReportsComponent},
    {path:'', component:LenderComponent}
]

@NgModule({
  declarations: [
    LenderComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
})
export class LenderModule { }
