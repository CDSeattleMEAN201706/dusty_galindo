import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject"
import {User} from "./user"
@Injectable()
export class ShareDataService {
  observedPlayers = new BehaviorSubject(null)
  constructor() { }
  updatePlayers(players: User[]){
    this.observedPlayers.next(players)
  }
}
