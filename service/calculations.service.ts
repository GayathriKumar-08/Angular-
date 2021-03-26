import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {
  cm:number;
  cf:number;
  km:number;
  constructor() { }

  public getMeter(cm: number): any {
    cm = cm * 0.01;
    console.log(cm + " Meters");
  }
  public getCentiF(cf: number): any {
    cf = (cf * 9/5) + 32;
    console.log(cf + " F");
  }
  public getKiloPounds(km: number): any {
    km = km*2.20462;
    console.log(km + " Pounds");
  }
  public getKiloM(kmm: number): any {
    kmm = kmm*0.621371;
    console.log(kmm+ " Miles");
  }
}
