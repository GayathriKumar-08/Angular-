import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForexService } from 'src/app/service/forex.service';

@Component({
  selector: 'app-forexexample',
  templateUrl: './forexexample.component.html',
  styleUrls: ['./forexexample.component.css']
})
export class ForexexampleComponent implements OnInit {

  amount: any = "";
  cm: number;
  optionSelected: string;
  optionSelected1: string;
  print: any;
  constructor(private forex: ForexService, private route:Router) { };


  ngOnInit(): void {
  }
  onNavigate(e: any) {
    this.optionSelected = e.target.value;
    console.log(this.optionSelected);
    return this.optionSelected;
  }
  onNavigate1(e: any) {
    this.optionSelected1 = e.target.value;
    console.log(this.optionSelected1);
    return this.optionSelected1;
  }
  /*********************************************************** */
  handleAmount() {
    if (this.optionSelected == "INR" && this.optionSelected1 == "USD") {
      console.log(this.amount + " INR");
      this.amount = this.forex.getInrUsd(this.amount);
    }

    else if (this.optionSelected == "INR" && this.optionSelected1 == "EUR") {
      console.log(this.amount + " INR");
      this.amount = this.forex.getInrEur(this.amount);
    }
    else if (this.optionSelected == "INR" && this.optionSelected1 == "AUD") {
      console.log(this.amount + " INR");
      this.amount = this.forex.getInrAud(this.amount);
    }
    /*****************************************************/
    else if (this.optionSelected == "USD" && this.optionSelected1 == "INR") {
      console.log(this.amount + " USD");
      this.amount = this.forex.getUsdInr(this.amount);
    }
    else if (this.optionSelected == "EUR" && this.optionSelected1 == "INR") {
      console.log(this.amount + " EUR");
      this.amount = this.forex.getEurInr(this.amount);
    }
    else if (this.optionSelected == "AUD" && this.optionSelected1 == "INR") {
      console.log(this.amount + " AUD");
      this.amount = this.forex.getAudInr(this.amount);
    }
  }
  handlelogout()
  {
    console.log("You have logged out!!!!");
    this.route.navigate(["login"]);
  }
  handledashboard()
  {
    console.log("You have logged out!!!!");
    this.route.navigate(["dashboard"]);
  }
}
