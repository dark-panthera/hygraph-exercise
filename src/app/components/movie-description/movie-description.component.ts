import { ActivatedRoute, ParamMap } from "@angular/router";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";

// Models
import { Movie } from "src/app/modules/hygraph/models/movies.model";

// Services
import { HygraphService } from "src/app/modules/hygraph/services/hygraph.service";

@Component({
  selector: "app-movie-description",
  templateUrl: "./movie-description.component.html",
  styleUrls: ["./movie-description.component.scss"]
})
export class MovieDescriptionComponent {
  // Strings
  movieId: string | null = "";

  // Booleans
  isLoading: boolean = true;
  isFound: boolean = false;

  // Observables
  movie: Movie;

  // Subscriptions
  subscriptions: Subscription[] = [];

  constructor(
    private hygraphService: HygraphService,
    private activatedRoute: ActivatedRoute
  ) {}

  // -----------------------------------------------------------------
  // Lifecycle Hooks
  ngOnInit(): void {
    this.subscriptions = [
      this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        this.movieId = params.get("id");

        if (this.movieId) {
          this.hygraphService
            .onGetMovieById(this.movieId)
            .subscribe((movie: Movie) => {
              this.movie = movie;

              if (this.movie) {

                this.isFound = true;
              } else {
                this.isFound = false;
              }

              this.isLoading = false;
            });

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
