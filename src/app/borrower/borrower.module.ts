import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';

import { BorrowerComponent } from './borrower.component';
import { LoanSearchComponent } from './loan-search/loan-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SuccessComponent } from './success/success.component';
import { LoanSearchRegionalComponent } from './loan-search-regional/loan-search-regional.component';
import { ActiveLoansComponent } from './active-loans/active-loans.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {path:'apply-loan', component: ApplyLoanComponent},
    {path:'active-loans', component: ActiveLoansComponent},
    {path:'loan-search', component: LoanSearchComponent},
    {path:'loan-search-regional', component: LoanSearchRegionalComponent},
    {path:'search-result/:id', component: SearchResultComponent},
    {path:'success',component: SuccessComponent},
    {path:'', component:BorrowerComponent}
]

@NgModule({
  declarations: [
    BorrowerComponent,
    LoanSearchRegionalComponent,
    ActiveLoansComponent,
    SearchResultComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ],
  providers: [],
})
export class BorrowerModule { }
