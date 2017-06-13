import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    colors = ["red", "orangered", "orange", "yellow", "green", "seagreen", "blue", "indigo", "violet"]
    randomColors = [this.colors[Math.floor(Math.random()*9)], this.colors[Math.floor(Math.random()*9)],this.colors[Math.floor(Math.random()*9)],this.colors[Math.floor(Math.random()*9)],this.colors[Math.floor(Math.random()*9)],this.colors[Math.floor(Math.random()*9)],this.colors[Math.floor(Math.random()*9)],this.colors[Math.floor(Math.random()*9)],this.colors[Math.floor(Math.random()*9)]]
    

}
