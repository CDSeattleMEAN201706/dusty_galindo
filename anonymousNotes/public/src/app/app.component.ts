import { Component, OnInit } from '@angular/core';
import {Note} from "./note"
import {HttpService} from "./http.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  newNote = {}
  notes: Note[] = []
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getNotes()
  }
  
  createNote(newNote){
    this._httpService.createNote(newNote).then(()=>{
      this.getNotes()
    })
    this.newNote = {}
  }
  getNotes(){
    this._httpService.getAllNotes().catch((error)=>{
      console.log(error)
    }).then((data)=>{
      this.notes = data
    })
    
  }

}
