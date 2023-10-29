import { Component, Input, SimpleChanges } from "@angular/core";

// Models
import { Movie } from "src/app/modules/hygraph/models/movies.model";

// Servi
@Component({
  selector: "app-related-movies",
  templateUrl: "./related-movies.component.html",
  styleUrls: ["./related-movies.component.scss"]
})
export class RelatedMoviesComponent {
  // Inputs
  @Input() inputMovie: Movie[] = [];

  // Arrays
  movies: Movie[] = [];

  constructor() {}

  // -----------------------------------------------------------------
  // Lifecycle Hooks
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes["inputMovie"] &&
      changes["inputMovie"].previousValue != changes["inputMovie"].currentValue
    ) {
      this.movies = changes["inputMovie"].currentValue;
    }
  }
}
