import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PromiseExample } from 'src/app/model/promiseexample';
import { AuthService } from 'src/app/service/auth.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-updatepromise',
  templateUrl: './updatepromise.component.html',
  styleUrls: ['./updatepromise.component.css']
})
export class UpdatepromiseComponent implements OnInit {

  id:number=0;
  constructor(private aRoute: ActivatedRoute, private expromsie: AuthService, private loc:Location) { }

  promise: PromiseExample;

  ngOnInit(): void {
    this.aRoute.params.subscribe(params => {
      console.log("Value sent is " + params['id']);
      this.expromsie.getProm(params['id']).then(pro => {
       this.promise = pro;
      });
    });

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
  goBack(){
    this.expromsie.upPromsie(this.promise).then(c=>
      {
        this.loc.back();
      })
 
 }
}
