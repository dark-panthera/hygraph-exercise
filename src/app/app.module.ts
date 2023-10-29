import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { HttpClientModule } from "@angular/common/http";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Components
import { MovieDescriptionComponent } from "src/app/components/movie-description/movie-description.component";
import { RelatedMoviesComponent } from "src/app/components/related-movies/related-movies.component";
import { LandingPageComponent } from "src/app/components/landing-page/landing-page.component";
import { MovieCardComponent } from "src/app/components/movie-card/movie-card.component";
import { NotFoundComponent } from "src/app/components/not-found/not-found.component";
import { GenreComponent } from "src/app/components/genre/genre.component";
import { AppComponent } from "src/app/app.component";

// Modules
import { MaterialModule } from "src/app/modules/material/material.module";
import { GraphQLModule } from "src/app/modules/hygraph/hygraph.module";
import { SharedModule } from "src/app/modules/shared/shared.module";

// Routings
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
  declarations: [
    MovieDescriptionComponent,
    RelatedMoviesComponent,
    LandingPageComponent,
    MovieCardComponent,
    NotFoundComponent,
    GenreComponent,
    AppComponent,
  ],
  imports: [
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    MaterialModule,
    BrowserModule,
    GraphQLModule,
    SharedModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
