import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LenderComponent } from './lender.component';

const routes: Routes = [
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
