import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllTheatresComponent } from './show-all-theatres.component';

describe('ShowAllTheatresComponent', () => {
  let component: ShowAllTheatresComponent;
  let fixture: ComponentFixture<ShowAllTheatresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllTheatresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllTheatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
