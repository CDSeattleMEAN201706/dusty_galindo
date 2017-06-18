import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateProductComponent} from './create-product/create-product.component'
import {ProductListComponent} from './product-list/product-list.component'
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {
    path: '',
    children: [],
    component: HomeComponent
  },
  {
    path: "products",
    children: [],
    component: ProductListComponent
  },
  {
    path: "new",
    component: CreateProductComponent,
  },
  {
    path: "new/:id",
    children: [],
    component: CreateProductComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
