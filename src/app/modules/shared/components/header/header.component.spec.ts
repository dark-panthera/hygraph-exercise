import { RouterTestingModule } from "@angular/router/testing";
import { TestBed } from "@angular/core/testing";

// Movies
import { HeaderComponent } from "src/app/modules/shared/components/header/header.component";

describe("HeaderComponent", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent]
    })
  );

  it("should create the app", () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
