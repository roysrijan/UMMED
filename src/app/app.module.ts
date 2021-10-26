import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ApplicationComponent } from './retail-lender/application/application.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { FinanceAwarenessComponent } from './finance-awareness/finance-awareness.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApplicationComponent,
    SuccessMessageComponent,
    FinanceAwarenessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }