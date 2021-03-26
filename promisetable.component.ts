import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PromiseExample } from 'src/app/model/promiseexample';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-promisetable',
  templateUrl: './promisetable.component.html',
  styleUrls: ['./promisetable.component.css']
})
export class PromisetableComponent implements OnInit {
 
  constructor(private expromise: AuthService, private route: Router) { }



  @Input("inprom")
  public mypromise: PromiseExample[] = [];

  @Output("eAprom")
  public eAddPro: EventEmitter<PromiseExample> = new EventEmitter<PromiseExample>();

  @Output("eRprom")
  public eRemPro: EventEmitter<number> = new EventEmitter<number>();

  public promise = new PromiseExample(0, "", "", "", "", "", "");

  ngOnInit(): void {
    this.expromise.getPromise().then((prom: PromiseExample[]) => {
      this.mypromise = prom;
    }).catch((err) => {
      console.error(err);
    }).finally(() => {
      console.log("works properly");
    })
  }

  handlelogout() {
    console.log("You have logged out!!!!");
    this.route.navigate(["login"]);
  }

  handleback() {
    console.log("back to promise page");
    this.route.navigate(["expromise"]);
  }
  onNavigate3(e: any) {
    let a = e.target.value;
    console.log(a);

  }
  onNavigate4(e: any) {
    let a = e.target.value;
    console.log(a);
  }
  onNavigate5(e: any) {
    let a = e.target.value;
    console.log(a);
  }
  onNavigate6(e: any) {
    let a = e.target.value;
    console.log(a);
  }
  onNavigate7(e: any) {
    let a = e.target.value;
    console.log(a);
  }


  public handleAddPromise(id: number, customername: string,
    customertype: string, creditCardtype: string,
    currencies: string, countries: string, cities: string) {
    this.promise = new PromiseExample(id, customername, customertype, creditCardtype, currencies, countries, cities);
    this.eAddPro.emit(this.promise);
  }

  public handleRemovePromise(ids: number) {

    this.eRemPro.emit(ids);
  }

}
