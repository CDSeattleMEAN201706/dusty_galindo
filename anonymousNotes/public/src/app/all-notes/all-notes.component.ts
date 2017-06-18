import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core"
import {Note} from "./../note"
@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {
  @Input() notes
  constructor() { }

  ngOnInit() {
  }

}
