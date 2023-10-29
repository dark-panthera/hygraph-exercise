import { RouterTestingModule } from "@angular/router/testing";
import { TestBed } from "@angular/core/testing";

// Movies
import { MovieCardComponent } from "src/app/components/movie-card/movie-card.component";

describe("MovieCardComponent", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MovieCardComponent]
    })
  );

  it("should create the app", () => {
    const fixture = TestBed.createComponent(MovieCardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
