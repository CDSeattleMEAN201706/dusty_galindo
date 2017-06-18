import { Injectable } from '@angular/core';
import { Product } from './product'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
@Injectable()
export class ShareDataService {
  observedProducts = new BehaviorSubject(null)
  updateProducts(products: Product[]){
    this.observedProducts.next(products)
  }

  
}
