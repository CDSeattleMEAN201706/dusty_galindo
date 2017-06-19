import { Component, OnInit } from '@angular/core';
import {User} from "./../user"
import {HttpService} from "./../http.service"
@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  players = []
  constructor(private _httpService: HttpService) {
    this._httpService.getAllUsers().catch(err=>console.log(err)).then((players)=>{
      this.players = players
    })
   }

  ngOnInit() {
  }

}
