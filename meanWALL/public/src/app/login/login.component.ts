import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../http.service"
import {Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _http: HttpService, private _router: Router) { }
  user = {}

  ngOnInit() {
  }
  login(formData){
    console.log("login component method")

    this._http.userLogin(formData.value).then((res)=>{
      console.log("result, ", res)
      this._router.navigate(["/wall"])
    }).catch((err)=>{
      console.log("error!", err)
    })
  }
}


