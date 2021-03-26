import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PromiseExample } from '../model/promiseexample';

@Injectable({
  providedIn: 'root'
})
export class ObservableexService {
  
  pro: PromiseExample[] = [];
  proUrl: string = "http://localhost:3000/pro/";

  constructor(private http:HttpClient) { }

  public getObservableList():Observable<PromiseExample[]>
  {
    return this.http.get<PromiseExample[]>(this.proUrl);
  }
 /** public getCurrencies(): Observable<PromiseExample[]> {
    //let url1 = this.proUrl + "?currencies=" + cuu;
    return this.http.get<PromiseExample[]>(this.proUrl);
  }**/
  
  public getCurrencies():Observable<any[]> {
    return this.http.get<any[]>(this.proUrl);
  }
}
