import { Injectable } from '@angular/core';
import {Http} from "@angular/http"
import "rxjs"
@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  getUserFromGithub(username){
    return this._http.get("https://api.github.com/users/"+username).map(data=>data.json()).toPromise()
  }
  getAllUsers(){
    return this._http.get("/users").map(data=>data.json()).toPromise()
  }
  addUser(user){
    return this._http.post("/new", user).map(data=>data.json()).toPromise()
  }

}
