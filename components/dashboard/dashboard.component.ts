import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  handlePrmoise(){
    console.log("You have gone to promise page!!!!");
  this.route.navigate(["expromise"]);
  }
  handleNewComp()
  {
    console.log("You have gone to pipe-ex page!!!!");
  this.route.navigate(["pipe-ex"]);
  }
  handleUnitalculations()
  {
    console.log("You have gone to unit calculation page!!!!");
  this.route.navigate(["unitcalculation"]);
  }
  handleForexCal()
  {
    console.log("You have gone to forex calculation page!!!!");
  this.route.navigate(["forex"]);
  }
  handleLogout()
  {
    console.log("You have logged out !!!!");
  this.route.navigate(["login"]);
  }
  handleObservable()
  {
    console.log("You have gone to observable page !!!!");
  this.route.navigate(["observable"]);
  }
  handlePaymentpage()
  {
    console.log("You have gone to Paymentt page !!!!");
  this.route.navigate(["paymentpage"]);
  }
}
