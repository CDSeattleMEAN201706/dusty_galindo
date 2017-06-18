import { Component } from '@angular/core';
import { Product } from './product'
import {BehaviorSubject} from "rxjs/BehaviorSubject"
import {ShareDataService} from "./share-data.service"
import {Subscription} from "rxjs/Subscription"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  productList: Product[] = []
  title = 'app';
  subscription:Subscription
  constructor(private _shareDataService: ShareDataService){
    _shareDataService.updateProducts(this.productList)
    this.subscription = _shareDataService.observedProducts.subscribe((updatedProducts)=>{
      this.productList = updatedProducts
    }, (err)=>{
      console.log(err)
    },()=>{console.log("success")})
  }
}
