import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  uid: string = "";
  pwd: string = "";
  invalid:boolean=false;
  auth: Auth;
  constructor(private route: Router, private authservice: AuthService) { }

  ngOnInit(): void {
    sessionStorage.setItem("auth", "");
  }
  handleClick() {
    let auth =
    {
      userid: this.uid,
      password: this.pwd
    }

    //this.authservice.getMockPromiseSlowly().then((auth)=>{
    //   console.log(auth);
    // });

 this.authservice.doAuth(this.uid, this.pwd).then((auth1: Auth[]) => {
      console.log("===============from promise============");
      if(auth1.length>0)
      {
        sessionStorage.setItem("auth", JSON.stringify(auth1));
      console.log(auth1);
      console.log("Clicked dashboard!");
      this.route.navigate(["dashboard"]);
      }
      else
      {
        this.invalid=true;
        console.log("wrong password");
      }
    }).catch((err)=>
    {
     
      console.log("Error"+err);
    });
      /**  if(auth1[0].pwd==this.pwd){
      sessionStorage.setItem("auth", JSON.stringify(auth1));
      console.log(auth1);
      console.log("Clicked dashboard!");
      this.route.navigate(["dashboard"]);
     }else
     {
      this.invalid=true;
       console.log("wrong password");
       alert("incorrect password!!!!");
     }
  
    sessionStorage.setItem("auth", JSON.stringify(auth));
    console.log(auth);
    **/


  }

}
