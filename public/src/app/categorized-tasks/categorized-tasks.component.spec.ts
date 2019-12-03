import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizedTasksComponent } from './categorized-tasks.component';

describe('CategorizedTasksComponent', () => {
  let component: CategorizedTasksComponent;
  let fixture: ComponentFixture<CategorizedTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorizedTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorizedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
