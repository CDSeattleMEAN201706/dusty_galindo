import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {HttpService} from './../http.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  score: number
  img_url: string
  userName: string
  error: boolean = false
  // @Output() submitEmitter = new EventEmitter()

  constructor(private _httpService: HttpService) { }
  getTasks(){
    console.log("getting tasks")
    this._httpService.retrieveTasks(this.userName).then(tasks => {
      this.score = tasks.followers + tasks.public_repos;
      this.img_url = tasks.avatar_url
      console.log(tasks)
      this.error = false
    }).catch(err =>{this.error = true})
  }
  submitPressed(){
    this.getTasks()
  }
  ngOnInit() {
    
    

  }

}
