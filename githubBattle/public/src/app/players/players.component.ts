import { Component, OnInit } from '@angular/core';

import {HttpService} from "./../http.service"
import {User} from "./../user"
import {ShareDataService} from "./../share-data.service"

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  player1: User = new User()
  player2: User = new User()
  players = []
  constructor(private _httpService: HttpService, private _dataService: ShareDataService) {

   }
  getUser1(user: string){
    this._httpService.getUserFromGithub(user).catch((error)=>{
      console.log(error)
    }).then((data)=>{
      console.log(data)
      
      this.player1.img_url = data.avatar_url
      this.player1.score = data.public_repos + data.followers
      this.players[0] = this.player1
      this._httpService.addUser(this.player1)
    })
  }
  getUser2(user: string){
    this._httpService.getUserFromGithub(user).catch((error)=>{
      console.log(error)
    }).then((data)=>{
      this.player2.img_url = data.avatar_url
      this.player2.score = data.public_repos + data.followers
      this.players[1] = this.player2
      this._httpService.addUser(this.player2).catch(err=>console.log(err)).then(()=>console.log("should have saved..."))
    })
  }
  toResults(){
    this._dataService.updatePlayers(this.players)
  }
  ngOnInit() {
  }

}
