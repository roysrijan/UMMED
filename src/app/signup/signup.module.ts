import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup.component';

const routes: Routes = [
    {path:'', component:SignupComponent}
]

@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
})
export class SignupModule { }
