// Genres
import { Genres } from "src/app/modules/hygraph/enums/genres.enums";

// Models
import { ProductionCompanies } from "src/app/modules/hygraph/models/production-companies.model";

export interface QueryMovies {
  movies: Movie[];
}

export interface Movie {
  // Auto Generated
  createdAt: string;
  updatedAt?: string;

  // Custom Fields
  id: string;
  movieTitle: string;
  publishedAt?: string;
  releaseDate: string;
  runtime: number;
  taglines: string[];
  genres: Genres[];
  productionCompanies: ProductionCompanies[];
  storyline?: string;
  moviePoster?: MoviePoster;
  relatedMovies: Movie[];
}

export interface MoviePoster {
  id?: string;
  createdAt: string;
  fileName: string;
  mimeType: string;
  url: string;
}
