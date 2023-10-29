import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

// Components
import { MovieDescriptionComponent } from "src/app/components/movie-description/movie-description.component";
import { LandingPageComponent } from "src/app/components/landing-page/landing-page.component";
import { NotFoundComponent } from "src/app/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/movies",
    pathMatch: 'full'
  },
  {
    path: "movies",
    component: LandingPageComponent
  },
  {
    path: "movies/:id",
    component: MovieDescriptionComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
