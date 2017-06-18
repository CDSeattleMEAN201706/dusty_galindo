import { Injectable } from '@angular/core';
import {Http} from "@angular/http"
import "rxjs"
@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  getAllNotes(){
    return this._http.get("/notes").map(data=>data.json()).toPromise()
  }
  createNote(note){
    return this._http.post("/new", note).map(data=>data.json()).toPromise()
  }
}
