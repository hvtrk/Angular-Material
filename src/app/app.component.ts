import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public show: Boolean = true;
  title = 'Rahul Kumar';
  constructor() {
    const currentpath = window.location.pathname;
    if (currentpath === '/') {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
