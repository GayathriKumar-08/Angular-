import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculationsService } from 'src/app/service/calculations.service';

@Component({
  selector: 'app-unitcalculations',
  templateUrl: './unitcalculations.component.html',
  styleUrls: ['./unitcalculations.component.css']
})
export class UnitcalculationsComponent implements OnInit {
  cm: number;
  cf:number;
  km:number;
  kmm:number;
  constructor(private cal:CalculationsService, private route:Router) { }
c:number;
  ngOnInit(): void {
  }
  handleCMtoM() {
    console.log(this.cm + "Centimeter")
    this.cm = this.cal.getMeter(this.cm);
  }
  handleCtoF()
  {
    console.log(this.cf + " centigrate")
    this.cf = this.cal.getCentiF(this.cf);
  }
  handleKtoP()
  {
    console.log(this.km + " kilomgrams")
    this.km = this.cal.getKiloPounds(this.km);
  }
  handleKtoM()
  {
    console.log(this.kmm + " kilometers")
    this.kmm = this.cal.getKiloPounds(this.kmm);
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
