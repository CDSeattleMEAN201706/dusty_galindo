import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {SortPipe} from "./../sort.pipe"
import {Quote} from "./../quote"
@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css'],

})
export class QuotesListComponent implements OnInit {
  @Input() quoteList
  @Output() voteEvent = new EventEmitter
  constructor() { 
    
  }
  vote(quote: Quote, value: number){
    this.voteEvent.emit({quote: quote, value: value})
  }
  ngOnInit() {
  }

}
