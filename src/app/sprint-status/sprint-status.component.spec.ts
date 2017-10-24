import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintStatusComponent } from './sprint-status.component';

describe('SprintStatusComponent', () => {
  let component: SprintStatusComponent;
  let fixture: ComponentFixture<SprintStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
