import { Injectable } from '@angular/core';
import {Http} from "@angular/http"
import "rxjs"
@Injectable()
export class HttpService {

  constructor(private _http: Http) {}
  
  //get all messages/comments
  getPosts(){
    return this._http.get("/messages").map(data=>data.json()).toPromise()
  }
  //post new post
  newPost(data){
    console.log("post service")
    return this._http.post("/post", data).toPromise()
  }
  //post new comment
  newComment(data){
    console.log("new comment service")
    return this._http.post("/comment", data).toPromise()
  }
  //get user, create if not in db
  userLogin(username){
    console.log("login service method")
    return this._http.post("/login", username).toPromise()
  }
  checkStatus(){
    return this._http.get("/check").map(data=>data.json()).toPromise()
  }
  logout(){
    return this._http.get("/logout").toPromise()
  }
}
