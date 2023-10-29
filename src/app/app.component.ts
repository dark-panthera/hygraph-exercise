import { NavigationStart, Router } from "@angular/router";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  // Strings
  routerPath: string = "";

  // Subscriptions
  subscriptions: Subscription[] = [];

  constructor(private router: Router) {}

  // -----------------------------------------------------------------
  // Lifecycle Hooks
  ngOnInit(): void {
    this.subscriptions = [
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (event.url == "/movies") {
            this.routerPath = "landing";
          } else {
            this.routerPath = "movie";
          }
        }
      })
    ];
  }

  // -----------------------------------------------------------------
  // On Destroy
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}
