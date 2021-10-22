import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'borrower',
    loadChildren: () => import('./borrower/borrower.module').then(m=>m.BorrowerModule)
  },
  {
    path:'lender',
    loadChildren: () => import('./lender/lender.module').then(m=>m.LenderModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: LoginComponent
  } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations:[LoginComponent],
  providers: []
})
export class AppRoutingModule { }
