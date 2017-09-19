import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedStoriesComponent } from './completed-stories.component';

describe('CompletedStoriesComponent', () => {
  let component: CompletedStoriesComponent;
  let fixture: ComponentFixture<CompletedStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
