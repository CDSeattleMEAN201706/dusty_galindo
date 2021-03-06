import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import {HttpService} from "./http.service"
import {FormsModule} from '@angular/forms'
import {HttpModule} from "@angular/http"

@NgModule({
  declarations: [
    AppComponent,
    AllNotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
