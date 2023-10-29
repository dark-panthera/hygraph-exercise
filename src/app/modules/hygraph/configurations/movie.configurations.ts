import { TypedDocumentNode, gql } from "apollo-angular";

export const GRAPHQL_MOVIES = gql`
  query MovieProductionCompanies {
    movies {
      id
      movieTitle
      publishedAt
      releaseDate
      runtime
      taglines
      createdAt
      updatedAt
      genres
      storyline
      moviePoster {
        id
        createdAt
        fileName
        mimeType
        url
      }
    }
  }
`;

export const GRAPHQL_MOVIE_BY_ID: TypedDocumentNode<unknown, unknown> = gql`
  query Movie($id: ID!) {
    movies(where: { id: $id }) {
      id
      movieTitle
      publishedAt
      releaseDate
      runtime
      taglines
      createdAt
      updatedAt
      genres
      storyline
      moviePoster {
        id
        createdAt
        fileName
        mimeType
        url
      }
      relatedMovies {
        createdAt
        updatedAt
        id
        movieTitle
        publishedAt
        releaseDate
        runtime
        taglines
        genres
        storyline
        moviePoster {
          id
          createdAt
          fileName
          mimeType
          url
        }
      }
    }
  }
`;

/*
movieTitle
      publishedAt
      releaseDate
      runtime
      taglines
      createdAt
      updatedAt
      genres
productionCompanies {
        ... on ProductionCompanies {
          id
          companyName
          createdAt
        }
      }

*/
