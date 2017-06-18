import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { HomeComponent } from './home/home.component';
import { HttpService } from './http.service'
import { ShareDataService } from './share-data.service'
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
