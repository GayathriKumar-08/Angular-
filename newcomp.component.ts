import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgePipe } from 'src/app/age.pipe';
import { CreditcardPipe } from 'src/app/creditcard.pipe';
import { CurrencyconverterPipe } from 'src/app/currencyconverter.pipe';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {

  public year: any = {};
  public age: any = {};

  public masked: any = {};
  public digits: any = {};
 
  balanceamt:number=5496053;
  balance:number;
  currencyconvert:any;
  curr:any;
  convert: any;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  public onSubmit(): void {
    this.age.name = new AgePipe().transform(this.year.name);
  }
  handleFormat() {
    this.masked.name = new CreditcardPipe().transform(this.digits.name);
  }
  handleCurrency() {
   this.convert = new CurrencyconverterPipe().transform(this.curr);
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
