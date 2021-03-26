import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { observable } from 'rxjs';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExobservableComponent } from './components/exobservable/exobservable.component';
import { ExpromiseComponent } from './components/expromise/expromise.component';
import { ForexexampleComponent } from './components/forexexample/forexexample.component';
import { LoginComponent } from './components/login/login.component';
import { NewcompComponent } from './components/newcomp/newcomp.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaytableComponent } from './components/paytable/paytable.component';
import { PromisetableComponent } from './components/promisetable/promisetable.component';
import { UnitcalculationsComponent } from './components/unitcalculations/unitcalculations.component';
import { UpdatepromiseComponent } from './components/updatepromise/updatepromise.component';


const routes: Routes = [
  {path:"", component:LoginComponent},
   {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"pipe-ex", component:NewcompComponent},
  {path:"forex", component:ForexexampleComponent},
  {path:"unitcalculation", component:UnitcalculationsComponent},
  {path:"expromise", component:ExpromiseComponent},
  {path:"promisetable", component:PromisetableComponent},
  {path:"observable", component:ExobservableComponent},
  {path:"paymentpage", component:PaymentComponent},
  {path:"paytable", component:PaytableComponent},
  {path:'updatepage/:id', component:UpdatepromiseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
