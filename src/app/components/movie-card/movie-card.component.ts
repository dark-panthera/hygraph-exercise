import { Component, Input, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";

// Models
import { Movie } from "src/app/modules/hygraph/models/movies.model";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.scss"]
})
export class MovieCardComponent {
  // Inputs
  @Input() inputMovie: Movie;

  // Objects
  movie: Movie;

  constructor(private router: Router) {}

  // -----------------------------------------------------------------
  // Lifecycle Hooks
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes["inputMovie"] &&
      changes["inputMovie"].previousValue != changes["inputMovie"].currentValue
    ) {
      this.movie = changes["inputMovie"].currentValue;
    }
  }

  // -----------------------------------------------------------------
  // Set Methods
  onNavigateInformation(): void {
    this.router.navigate([`/movies/${this.movie.id}`]);
  }
}
