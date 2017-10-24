import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

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
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SprintStatusComponent } from './sprint-status/sprint-status.component';

const appRoutes: Routes = [
  {path: 'resources', component: ResourcesComponent},
  {path: 'stories', component: StoriesComponent}

];

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
    NewStoryComponent,
    SprintStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
