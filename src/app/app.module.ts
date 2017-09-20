import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { CompletedStoriesComponent } from './stories/completed-stories/completed-stories.component';
import { InProgressStoriesComponent } from './stories/in-progress-stories/in-progress-stories.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProgressGraphComponent } from './progress-graph/progress-graph.component';
import { StoryComponent } from './story/story.component';
import { FormsModule } from '@angular/forms';
import { NewStoryComponent } from './new-story/new-story.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    CompletedStoriesComponent,
    InProgressStoriesComponent,
    ResourcesComponent,
    ProgressGraphComponent,
    StoryComponent,
    NewStoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
