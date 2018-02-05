import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonClicked: boolean = false;
  wasClicked: Array<any> = [];
  count: number = 0;

  onClick() {
    this.buttonClicked = !this.buttonClicked;
    // this.wasClicked.push(++this.count);
    this.wasClicked.push(new Date());
  }

  moreThan5() {
    return this.count >= 5;
  }
}
