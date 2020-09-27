import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegMovieComponent } from './reg-movie.component';

describe('RegMovieComponent', () => {
  let component: RegMovieComponent;
  let fixture: ComponentFixture<RegMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
