import { Component, OnInit } from '@angular/core';
import { Story } from '../../../story.model';

@Component({
  selector: 'app-completed-stories',
  templateUrl: './completed-stories.component.html',
  styleUrls: ['./completed-stories.component.css']
})
export class CompletedStoriesComponent implements OnInit {
  stories: Story[] = [ new Story( 'story1' , 'story1 - description' , new Date(201, 12, 31) , new Date(201, 12, 31) ),
                        new Story( 'story2' , 'story2 - description' , new Date(201, 12, 31) , new Date(201, 12, 31) ),
                        new Story( 'story3' , 'story3 - description' , new Date(201, 12, 31) , new Date(201, 12, 31) ) ];
  title = 'start';
  constructor() { }

  ngOnInit() {
  }

  AddStory() {
    alert('hi');
    this.stories.push(new Story( 'story9' , 'story3 - description' , new Date(201, 12, 31) , new Date(201, 12, 31)));
    this.title = 'hi';
  }

}
