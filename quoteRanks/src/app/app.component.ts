import { Component } from '@angular/core';
import { Quote } from "./quote"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quoteList: Quote[] = []
  title = 'app';
  addQuoteToList(quote){
    this.quoteList.push(quote)
    console.log(quote)
    this.quoteList.sort((a, b)=>{
      return b.votes - a.votes
    })
  }
  editVote(eventData){
    if(eventData.value === 0){
      console.log("Delete quote!")
      return false
    }
    console.log(eventData)
    eventData.quote.votes += eventData.value
    this.quoteList.sort((a, b)=>{
      return b.votes - a.votes
    })
  }
}
