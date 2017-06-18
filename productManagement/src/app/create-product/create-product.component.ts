import { Component, OnInit, Input, Output } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject"
import {ShareDataService} from "./../share-data.service"
import {Product} from "./../product"
import {Subscription} from 'rxjs/Subscription'
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  subscritpion: Subscription
  products: Product[] = []
  productID: number
  form = {}
  update = false
  submitDisabled:boolean = true
  constructor(private _shareDataService: ShareDataService, private _route: ActivatedRoute) { 

    this.subscritpion=_shareDataService.observedProducts.subscribe((updatedProducts)=>{
      this.products = updatedProducts
      console.log(this.products)
    }, (error)=>{
      console.log(error)
    }, ()=>{console.log('success')})
    this._route.params.subscribe((param)=>{
      this.productID = param.id
      if(this.productID < this.products.length && this.productID > -1){
        this.form = this.products[this.productID]
        this.update = true
      }

    })
  }
    
  
  
  ngOnInit() {
    console.log(this.products)
  }
  addProduct(formData){
    if(this.update){
      this.products[this.productID] = formData.value
    }else{
      this.products.push(formData.value)
    }
    
    this._shareDataService.updateProducts(this.products)
    this.form = {}

  }

}
