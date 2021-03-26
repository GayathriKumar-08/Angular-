import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForexService {
  amount: number;
  optionSelected: string;
  optionSelected1: string;
  constructor() { }

  public getInrUsd(amount: number): any {
    amount = amount * 0.137941;
    console.log(amount + " USD");
  }
  public getInrEur(amount: number): any {
    amount = amount * 0.0115655;
    console.log(amount + " EUR");
  }

  public getInrAud(amount: number): any {
    amount = amount * 0.0178078;
    console.log(amount + " AUD");
  }
  /*******************************************************/
  public getUsdInr(amount: number): any {
    amount = amount * 72.4947;
    console.log(amount + " INR");
  }
  public getEurInr(amount: number): any {
    amount = amount * 86.4639;
    console.log(amount + " INR");
  }
  public getAudInr(amount: number): any {
    amount = amount * 56.1550;
    console.log(amount + " INR");
  }
}
