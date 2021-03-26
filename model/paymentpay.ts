import BaseMode from "./BaseMode";
export class Paymentypay extends BaseMode{
    constructor( id:number, customerid:number, amount: number,curr: string,fromacc: any,toacc: any,beneacc: any,bankcharges: number,totalamount:number)
    {
        super();
        this.id=id;
        this.customerid=customerid;
        this.amount=amount;
        this.curr=curr;
        this.fromacc=fromacc;
        this.toacc=toacc;
        this.beneacc=beneacc;
        this.bankcharges=bankcharges;
        this.totalamount=totalamount;
    }
   
    id: number;
    customerid: number;
    amount: number;
    curr: string;
    fromacc: any;
    toacc: any;
    beneacc: any;
    bankcharges: number;
    totalamount:number=0;
}