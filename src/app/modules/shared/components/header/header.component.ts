import { Component, Input, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  // Inputs
  @Input() inputEnableHome: boolean = false;
  @Input() inputTitle: string = "";

  // Strings
  title: string = "";

  // Booleans
  isHomeEnabled: boolean = false;

  constructor(private router: Router) {}

  // -----------------------------------------------------------------
  // Lifecycle Hooks
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes["inputTitle"] &&
      changes["inputTitle"].previousValue != changes["inputTitle"].currentValue
    ) {
      this.title = changes["inputTitle"].currentValue;
    }

    if (
      changes["inputEnableHome"] &&
      changes["inputEnableHome"].previousValue != changes["inputEnableHome"].currentValue
    ) {
      this.isHomeEnabled = changes["inputEnableHome"].currentValue;
    }
  }

  // -----------------------------------------------------------------
  // Set Methods
  onRedirectHome(): void {
    this.router.navigate(["/movies"]);
  }
}
