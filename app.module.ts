import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgePipe } from './age.pipe';
import { NewcompComponent } from './components/newcomp/newcomp.component';
import { FormsModule } from '@angular/forms';
import { CreditcardPipe } from './creditcard.pipe';
import { CurrencyconverterPipe } from './currencyconverter.pipe';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpromiseComponent } from './components/expromise/expromise.component';
import { UnitcalculationsComponent } from './components/unitcalculations/unitcalculations.component';
import { ForexexampleComponent } from './components/forexexample/forexexample.component';
import {HttpClientModule} from '@angular/common/http';
import { PromisetableComponent } from './components/promisetable/promisetable.component';
import { UpdatepromiseComponent } from './components/updatepromise/updatepromise.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ExobservableComponent } from './components/exobservable/exobservable.component';
import { PaytableComponent } from './components/paytable/paytable.component';


@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    NewcompComponent,
    CreditcardPipe,
    CurrencyconverterPipe,
    LoginComponent,
    DashboardComponent,
    ExpromiseComponent,
    UnitcalculationsComponent,
    ForexexampleComponent,
    PromisetableComponent,
    UpdatepromiseComponent,
    PaymentComponent,
    ExobservableComponent,
    PaytableComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
