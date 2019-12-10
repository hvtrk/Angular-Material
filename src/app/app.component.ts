import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public show: Boolean = true;
  title = "Rahul Kumar";
  constructor(
    private router: Router
    ) {
    router.events.subscribe(val => {
      if (val && val instanceof NavigationEnd) {
        if ((val.url === "/login" || val.url === "/signup")) {
          this.show = true;
        } else {
          this.show = false;
        }
      }
    });
  }
}
