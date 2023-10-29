import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

// Models
import { Movie } from "src/app/modules/hygraph/models/movies.model";

// Services
import { HygraphService } from "src/app/modules/hygraph/services/hygraph.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent {
 // Booleans
 isLoading: boolean = true;

 // Observables
 movies$: Observable<Movie[]>;

  constructor(private hygraphService: HygraphService, private router: Router) {}

  // -----------------------------------------------------------------
  // Lifecycle Hooks
  ngOnInit(): void {
    this.movies$ = this.hygraphService.onGetMoviesWatch();
  }

  // -----------------------------------------------------------------
  // Set Methods
  onNavigateInformation(movie: Movie): void {
    this.router.navigate([`/movies/${movie.id}`]);
  }
}
