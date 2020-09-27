import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTheatreComponent } from './reg-theatre.component';

describe('RegTheatreComponent', () => {
  let component: RegTheatreComponent;
  let fixture: ComponentFixture<RegTheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegTheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
