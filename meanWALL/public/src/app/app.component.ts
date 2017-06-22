import { Component } from '@angular/core';
import {HttpService} from "./http.service"
import {Router} from "@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _http: HttpService, private _router: Router){}
  logout(){
    this._http.logout().then(()=>{
      this._router.navigate(["/"])
    }).catch((error)=>{
      console.log(error)
      this._router.navigate(["/"])
    })
  }
}
