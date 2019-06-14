import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirecoursesComponent } from './firecourses.component';

describe('FirecoursesComponent', () => {
  let component: FirecoursesComponent;
  let fixture: ComponentFixture<FirecoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirecoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
