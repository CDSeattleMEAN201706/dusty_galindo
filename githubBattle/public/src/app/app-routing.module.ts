import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayersComponent} from "./players/players.component"
import {RankingsComponent} from "./rankings/rankings.component"
import {ResultsComponent} from "./results/results.component"
const routes: Routes = [
  {
    path: '',
    children: [],
    pathMatch: 'full',
    component: PlayersComponent
  },
  {
    path: "results",
    component: ResultsComponent
  },
  {
    path: "rankings",
    component: RankingsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
