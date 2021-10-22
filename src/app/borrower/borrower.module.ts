import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';

import { BorrowerComponent } from './borrower.component';
import { LoanSearchComponent } from './loan-search/loan-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
    {path:'apply-loan', component: ApplyLoanComponent},
    {path:'loan-search', component: LoanSearchComponent},
    {path:'search-result', component: SearchResultComponent},
    {path:'success',component: SuccessComponent},
    {path:'', component:BorrowerComponent}
]

@NgModule({
  declarations: [
    BorrowerComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
})
export class BorrowerModule { }
