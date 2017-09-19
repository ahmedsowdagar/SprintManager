import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressStoriesComponent } from './in-progress-stories.component';

describe('InProgressStoriesComponent', () => {
  let component: InProgressStoriesComponent;
  let fixture: ComponentFixture<InProgressStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
