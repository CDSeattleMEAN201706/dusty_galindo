import { Component, OnInit } from '@angular/core';
import {HttpService} from "./../http.service"
import {Router} from "@angular/router"
@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  user = {username: "", _id: ""}
  message = {text: "", _user: ""}
  comment = {text: ""}
  messages = []
  comments = []
  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getPosts()
    this._http.checkStatus().catch((error)=>{
      console.log("catching error response client side")
      this._router.navigate([''])

    }).then((user)=>{
      if(user){
        this.user.username = user.username
        this.user._id = user._id
        this.message._user = user._id
      }
      
    })
  }
  
  getPosts(){
    this._http.getPosts().catch((error)=>{
      console.log("error in getposts wall component")
    }).then((posts)=>{
      console.log("posts:, ", posts)
      this.messages = posts
    })
  }
  submitPost(data){


    this._http.newPost(data).catch((error)=>
    console.log("error in wall component", error))
    
      .then((result)=>{
        console.log("result, ", result)
        this.message = {text: "", _user: this.user._id}
        this.getPosts()
      })
  }

}
