import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDashComponent } from './class-dash.component';

describe('ClassDashComponent', () => {
  let component: ClassDashComponent;
  let fixture: ComponentFixture<ClassDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
