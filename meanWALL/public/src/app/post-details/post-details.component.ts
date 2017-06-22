import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router"
import {Message} from "./../message"
import {HttpService} from "./../http.service"
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  comment = {}

  data = {post_id: "", comment: this.comment}
  @Input() message: Message
  @Output() myEventEmitter = new EventEmitter()
  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {

    this.data.post_id = this.message._id
  }
  triggerEvent(){
    this.myEventEmitter.emit()
  }
  submitComment(){
    this._http.newComment(this.data).catch((error)=>{
      if(error){
        console.log("catching error in details component")
        throw{e: "error"}
      }
      
  }).then((result)=>{
      console.log(result)
      console.log("inside then in details component")
      this.comment = {}
      this.data = {post_id: "", comment: this.comment}
      this.triggerEvent()
    })

  }
}
