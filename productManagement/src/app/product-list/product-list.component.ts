import { Component, OnInit } from '@angular/core';
import {Product} from "./../product"
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import {ShareDataService} from './../share-data.service'
import {Subscription} from 'rxjs/Subscription'
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [] 
  deleteProduct(id){
    this.products.splice(id,1)
  }
  subscription: Subscription
  constructor(private _shareDataService: ShareDataService) {
    this.subscription = _shareDataService.observedProducts.subscribe(
      (updatedProducts)=>{
        this.products = updatedProducts
      },
      (err)=>{
        console.log(err)
      },()=>{}
    )
    
   }

  ngOnInit() {
  }

}
