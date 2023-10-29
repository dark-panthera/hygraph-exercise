import { ApolloQueryResult } from "@apollo/client/core";
import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

// Configurations
import {
  GRAPHQL_MOVIE_BY_ID,
  GRAPHQL_MOVIES
} from "src/app/modules/hygraph/configurations/movie.configurations";

// Models
import {
  QueryMovies,
  Movie
} from "src/app/modules/hygraph/models/movies.model";

@Injectable({
  providedIn: "root"
})
export class HygraphService {
  constructor(private apollo: Apollo) {}

  // -----------------------------------------------------------------
  // Get Observables
  onGetMoviesWatch(): Observable<Movie[]> {
    return this.apollo
      .watchQuery<QueryMovies>({
        query: GRAPHQL_MOVIES,
        variables: {}
      })
      .valueChanges.pipe(
        map((response: ApolloQueryResult<QueryMovies>) => {
          return response.data.movies;
        })
      );
  }

  // -----------------------------------------------------------------
  // Get Observables
  onGetMovieById(id: string): Observable<Movie> {
    return this.apollo
      .watchQuery<QueryMovies>({
        query: GRAPHQL_MOVIE_BY_ID,
        variables: {
          id: id
        }
      })
      .valueChanges.pipe(
        map((response: ApolloQueryResult<QueryMovies>) => {
          console.log(response);
          return response.data.movies;
        }),
        map((movies: Movie[]) => movies[0])
      );
  }
}
