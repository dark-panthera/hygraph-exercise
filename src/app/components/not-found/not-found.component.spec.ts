import { RouterTestingModule } from "@angular/router/testing";
import { TestBed } from "@angular/core/testing";

// Movies
import { NotFoundComponent } from "src/app/components/not-found/not-found.component";

describe("NotFoundComponent", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NotFoundComponent]
    })
  );

  it("should create the app", () => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
