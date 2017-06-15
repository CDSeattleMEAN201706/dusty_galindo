import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import{Quote} from "./../quote"
@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  @Output() addQuoteEvent = new EventEmitter()
  constructor() { }
  quote: Quote = new Quote
  ngOnInit() {
  }
  triggerEvent(newQuote){
    this.addQuoteEvent.emit(newQuote)
  }
  submitQuote(data){
    console.log(data)
    if(!data.valid){
      console.log("returning false")
      return false
    }
    console.log("triggering event")

    this.triggerEvent(this.quote)
    this.quote = new Quote
  }
}
