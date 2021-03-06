import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FinanceAwarenessComponent } from './finance-awareness/finance-awareness.component';
import { AdminComponent } from './lender/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ApplicationComponent } from './retail-lender/application/application.component';
import { BuySecurityComponent } from './retail-lender/buy-security/buy-security.component';
import { SuccessMessageComponent } from './success-message/success-message.component';

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
    path:'signup',
    loadChildren: () => import('./signup/signup.module').then(m=>m.SignupModule)
  },
  {
    path: 'mfi-lender',
    component: ApplicationComponent
  },
  {
    path: 'awareness',
    component: FinanceAwarenessComponent
  },
  {
    path: 'success-message',
    component: SuccessMessageComponent
  },
  {
    path: 'mfi-admin',
    component: AdminComponent
  },
  {
    path: 'buy-security',
    component: BuySecurityComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: LoginComponent
  },

   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  declarations:[LoginComponent],
  providers: []
})
export class AppRoutingModule { }
