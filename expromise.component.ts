import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromiseExample } from 'src/app/model/promiseexample';
import { AuthService } from 'src/app/service/auth.service';




@Component({
  selector: 'app-expromise',
  templateUrl: './expromise.component.html',
  styleUrls: ['./expromise.component.css']
})
export class ExpromiseComponent implements OnInit {

  cty;
  id: number;
  customername: string;
  customertype: string;
  creditCardtype: string;
  currencies: string;
  countries: string;
  cities: string;


  public pro: PromiseExample[] = [];


  constructor(private route: Router, private expromise: AuthService) { }

  ngOnInit(): void {

  }
  projects = [
    {
      key: 1, value: "India",
    },
    {
      key: 2, value: "UnitedStated",
    },
    {
      key: 3, value: "Europe",
    },
    {
      key: 4, value: "Australia",
    }
  ]
  changeCountires(e:any) {
    if (e.target.value == "India") {
      console.log("India");
    }
    else if (e.target.value == "UnitedStates") {
      console.log("UnitedStates");
    }
    else if (e.target.value == "Europe") {
      console.log("Europe");
    }
    else if (e.target.value == "Australia") {
      console.log("Australia");
    }
    this.setCountries();
  }
  private setCountries() {
    if (this.countries === "India") {
      let city = [
        {
          key: 101, value: `Chennai`,
        },
        {
          key: 102, value: `Kerala`,
        },
        {
          key: 103, value: `Madurai`,
        }
      ]
      this.cty = city;
    }
    else if (this.countries === "UnitedStated") {
      let city1 = [
        {
          key: 201, value: `New York`,
        },
        {
          key: 202, value: `California`,
        },
        {
          key: 203, value: `Texas`,
        }
      ]
      this.cty = city1;
    } else if (this.countries === "Europe") {
      let city2 = [
        {
          key: 301, value: `Berlin`,
        },
        {
          key: 302, value: `Rome`,
        },
        {
          key: 303, value: `Madrid`,
        }
      ]
      this.cty = city2
    }
    else if (this.countries === "Australia") {
      let city2 = [
        {
          key: 301, value: `NewCastle`,
        },
        {
          key: 302, value: `Sydney`,
        },
        {
          key: 303, value: `Gold Coast`,
        }
      ]
      this.cty = city2
    }
    else {
      this.cty = []
    }
  }
  onNavigate3(e: any) {
    this.customertype = e.target.value;
    console.log(this.customertype);
    return this.customertype;
  }
  onNavigate4(e: any) {
    this.creditCardtype = e.target.value;
    console.log(this.creditCardtype);
    return this.creditCardtype;
  }
  onNavigate5(e: any) {
    this.currencies = e.target.value;
    console.log(this.currencies);
    return this.currencies;
  }

  changeCities(e: any) {
    this.cities = e.target.value;
    console.log(this.cities);
    return this.cities;
  }
  handlelogout() {
    console.log("You have logged out!!!!");
    this.route.navigate(["login"]);
  }
  handledashboard() {
    console.log("You have logged out!!!!");
    this.route.navigate(["dashboard"]);
  }
  /**handleNextpage() {
    this.route.navigate(["promisetable"]);
  }**/
  handlePromise() {
    let pro =
    {
      id: this.id,
      customername: this.customername,
      customertype: this.customertype,
      creditCardtype: this.creditCardtype,
      currencies: this.currencies,
      countries: this.countries,
      cities: this.cities,
    }
    this.expromise.doPro(this.id, this.customername, this.customertype, this.creditCardtype, this.currencies, this.countries, this.cities).then((auth1: PromiseExample) => {
      console.log("===============promise============"); console.log(pro);

      if (auth1[0].id = this.id && auth1[0].customername == this.customername && auth1[0].customertype == this.customertype && auth1[0].creditCardtype == this.creditCardtype
        && auth1[0].currencies == this.currencies && auth1[0].countries == this.countries && auth1[0].cities == this.cities) {

        console.log("===============fetching the same data============");

        sessionStorage.setItem("pro", JSON.stringify(auth1));
        console.log(auth1);
        console.log("Clicked!");
      }
      else {
        console.log("Records not found");
        alert("invalid records!!!!");
      }
    }).catch((err) => {
      console.log(err);
    });
    sessionStorage.setItem("pro", JSON.stringify(pro));
    console.log(pro);
  }
  handleAddPromise(c: PromiseExample) {
    this.expromise.addPromise(c).then((c) => {
      console.log(c);
      this.pro.push(c);
    })
  }
  handleRemovePromise(ids: number) {
    console.log(ids + "...Removed");
    this.expromise.removePromise(ids).then((res) => {
      this.pro.forEach((item, index) => {
        if (item.id == ids) {
          this.pro.splice(index, 1);
        }
      });

    });
  }

}




