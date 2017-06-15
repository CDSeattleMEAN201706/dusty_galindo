import { Pipe, PipeTransform } from '@angular/core';
import {Quote} from "./quote"
@Pipe({
  name: 'sortByVote'
})
export class SortPipe implements PipeTransform {

  transform(quoteArray: Quote[]): Quote[] {
    quoteArray.sort((a, b)=>{
      return a.votes - b.votes
    })
    return quoteArray

  }

}
