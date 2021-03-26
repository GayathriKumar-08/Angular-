import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../model/auth';
import { PromiseExample } from '../model/promiseexample';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth[] = [
    { "uid": "gayu", "pwd": "gayu@1234" },
    { "uid": "keerthi", "pwd": "keerthu@1234" },
    { "uid": "abcd", "pwd": "abcd@1234" }
  ];
  pro: PromiseExample[] = [];


  loginUrl: string = "http://localhost:3000/auth/";

  proUrl: string = "http://localhost:3000/pro/";

  constructor(private http: HttpClient) { }

  public getPromise(): Promise<PromiseExample[]> {
    return this.http.get<PromiseExample[]>(this.proUrl).toPromise();
  }

  /*public getMockPromiseSlowly(): Promise<PromiseExample[]> {
    let promise = new Promise<PromiseExample[]>(resolve => {
      setTimeout(() => resolve(this.getMockPromise()), 800)
    });
    return promise;
  }*/
  public doAuth(u: string, p: string): Promise<Auth[]> {
    let url = this.loginUrl + "?uid=" + u
    return this.http.get<Auth[]>(url).toPromise();
  }

  public doPro(id: number, cn: string, cty: string, ccty: string, cuu: string, con: string, city: string): Promise<PromiseExample> {
    let url1 = this.proUrl + "?customername=" + cn;
    return this.http.get<PromiseExample>(url1).toPromise();
  }

  public addPromise(prom: PromiseExample): Promise<PromiseExample> {
    return this.http.post<PromiseExample>(this.proUrl, prom).toPromise();
  }

  public removePromise(idx: number): Promise<any> {
    return this.http.delete<any>(`${this.proUrl}${idx}`).toPromise();;
  }

  public getProm(idx: number): Promise<PromiseExample> {
    return this.http.get<PromiseExample>(this.proUrl + idx).toPromise();
  }
  
  public upPromsie(pro: PromiseExample): Promise<PromiseExample> {
    return this.http.put<PromiseExample>(this.proUrl + pro.id, pro).toPromise();
  }
}