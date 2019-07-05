import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireprotectioncoursesComponent } from './fireprotectioncourses.component';

describe('FireprotectioncoursesComponent', () => {
  let component: FireprotectioncoursesComponent;
  let fixture: ComponentFixture<FireprotectioncoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireprotectioncoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireprotectioncoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
