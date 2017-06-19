import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import {HttpService} from "./http.service"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { RankingsComponent } from './rankings/rankings.component';
import { ResultsComponent } from './results/results.component';
import {HttpModule} from "@angular/http"
import {ShareDataService} from "./share-data.service"

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    RankingsComponent,
    ResultsComponent
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
