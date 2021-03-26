import BaseMode from "./BaseMode";

export class PromiseExample extends BaseMode{
   

  constructor(id:number,customername:string,customertype: string,creditCardtype: string,currencies: string, countries: string,cities:string) {
    super();
    this.id=id;
    this.customername=customername;
    this.customertype=customertype;
    this.creditCardtype=creditCardtype;
    this.currencies=currencies;
    this.countries=countries;
    this.cities=cities;
  }
  id?:number=0;
    customername: string="";
  customertype: string="";
  creditCardtype: string="";
  currencies: string="";
  countries: string="";
  cities: string="";
}