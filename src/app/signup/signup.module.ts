import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from '../borrower/success/success.component';

import { SignupComponent } from './signup.component';

const routes: Routes = [
    {path:'', component:SignupComponent}
]

@NgModule({
  declarations: [
    SignupComponent,
    SuccessComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class SignupModule { }
