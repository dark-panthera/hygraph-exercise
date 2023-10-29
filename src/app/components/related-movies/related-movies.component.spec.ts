import { RouterTestingModule } from "@angular/router/testing";
import { TestBed } from "@angular/core/testing";

// Movies
import { RelatedMoviesComponent } from "src/app/components/related-movies/related-movies.component";

describe("RelatedMoviesComponent", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RelatedMoviesComponent]
    })
  );

  it("should create the app", () => {
    const fixture = TestBed.createComponent(RelatedMoviesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
