import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-angular-app';
  color:string="white"

  pickColor(value){
    this.color=value;
    console.log(this.color)
  }
}
