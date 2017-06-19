import { Component, OnInit } from '@angular/core';
import {User} from "./../user"
import {ShareDataService} from "./../share-data.service"

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  winner = 0
  players = []
  constructor(private _dataService: ShareDataService) {
    this._dataService.observedPlayers.subscribe(
      players => this.players = players, err=> console.log(err), ()=>{}
    )
   }

  ngOnInit() {
    (this.players[0].score > this.players[1].score) ? this.winner = 0 : this.winner = 1
  }

}
