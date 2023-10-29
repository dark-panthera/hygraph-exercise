import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { Observable } from "rxjs";

// Service
import { HygraphService } from "src/app/modules/hygraph/services/hygraph.service";

describe("HygraphService", () => {
  let hygraphService: HygraphService;
  let httpMock: HttpTestingController;

  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [HygraphService]
    });

    hygraphService = TestBed.inject(HygraphService);
    
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    const service: HygraphService = TestBed.inject(HygraphService);
    expect(service).toBeTruthy();
  });
});