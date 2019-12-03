import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaggedTasksComponent } from './flagged-tasks.component';

describe('FlaggedTasksComponent', () => {
  let component: FlaggedTasksComponent;
  let fixture: ComponentFixture<FlaggedTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlaggedTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlaggedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
