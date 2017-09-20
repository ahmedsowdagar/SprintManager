import { Component, OnInit } from '@angular/core';
import { Story } from '../../../story.model';

@Component({
  selector: 'app-in-progress-stories',
  templateUrl: './in-progress-stories.component.html',
  styleUrls: ['./in-progress-stories.component.css']
})
export class InProgressStoriesComponent implements OnInit {
  stories: Story[] = [ new Story( 'story1' , 'story1 - description' , new Date(2011,  12, 31) , new Date(2011, 12, 31) ),
  new Story( 'story2' , 'story2 - description' , new Date(2011, 12, 31) , new Date(2011, 12, 31) ),
  new Story( 'story3' , 'story3 - description' , new Date(2011, 12, 31) , new Date(2011, 12, 31) ) ];

  constructor() { }

  ngOnInit() {
  }

  AddStory() {
    this.stories.push(new Story( 'story98' , 'story3 - description' , new Date(2011, 12, 31) , new Date(2011, 12, 31)));
  }
}
