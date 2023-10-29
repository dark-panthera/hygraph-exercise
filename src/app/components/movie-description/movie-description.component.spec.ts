import { RouterTestingModule } from "@angular/router/testing";
import { TestBed } from "@angular/core/testing";

// Movies
import { MovieDescriptionComponent } from "src/app/components/movie-description/movie-description.component";

describe("MovieDescriptionComponent", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MovieDescriptionComponent]
    })
  );

  it("should create the app", () => {
    const fixture = TestBed.createComponent(MovieDescriptionComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
