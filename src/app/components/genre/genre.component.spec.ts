import { RouterTestingModule } from "@angular/router/testing";
import { TestBed } from "@angular/core/testing";

// Movies
import { GenreComponent } from "src/app/components/genre/genre.component";

describe("GenreComponent", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [GenreComponent]
    })
  );

  it("should create the app", () => {
    const fixture = TestBed.createComponent(GenreComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
