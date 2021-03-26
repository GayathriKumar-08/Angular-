import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paymentypay } from '../model/paymentpay';

@Injectable({
  providedIn: 'root'
})
export class PaymentpayloadService {

  mypayment: Paymentypay[] = [];
  payUrl: string = "http://localhost:3000/payment/";

  constructor(private http: HttpClient) { }

  public getPaydetails(): Promise<Paymentypay[]> {
    return this.http.get<Paymentypay[]>(this.payUrl).toPromise();
  }
  public doPaydetails(id:number,cid:number,amt:number,cur:string,facc:any,tacc:any,bacc:any,bch:number,tamt:number): Promise<Paymentypay> {
    let url1 = this.payUrl + "?customerid=" + cid;
    return this.http.get<Paymentypay>(url1).toPromise();
  }
  public doPaycheck(cid:number,tamt:number): Promise<Paymentypay> {
    let url2 = this.payUrl +"?customerid="+cid;
    return this.http.get<Paymentypay>(url2).toPromise();
  }
}
