import { Component, Input, SimpleChanges } from "@angular/core";

// Genres
import { Genres } from "src/app/modules/hygraph/enums/genres.enums";

@Component({
  selector: "app-genre",
  templateUrl: "./genre.component.html",
  styleUrls: ["./genre.component.scss"]
})
export class GenreComponent {
  // Inputs
  @Input() inputGenres: Genres[] = [];

  // Arrays
  genresList: Genres[] = [];

  constructor() {}

  // -----------------------------------------------------------------
  // Lifecycle Hooks
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes["inputGenres"] &&
      changes["inputGenres"].previousValue != changes["inputGenres"].currentValue
    ) {
      this.genresList = changes["inputGenres"].currentValue;
    }
  }
}
