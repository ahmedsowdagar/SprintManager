import { Component, OnInit } from '@angular/core';
import { Story } from '../../story.model';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  sprintStories: Story[] = [ new Story( 'story1' , 'story5' , new Date( 2017,  12, 31) , new Date(2017, 12, 31) ),
                        new Story( 'story2' , 'story6' , new Date( 2017,  12, 31) , new Date(2017, 12, 31)),
                        new Story( 'story3' , 'story7' , new Date( 2017,  12, 31) , new Date(2017, 12, 31) ) ];
  newStoryId: string;
  newStoryDescription: string;
  newStoryStartDate: Date;
  newStoryEndDate: Date;

  constructor() { }

  ngOnInit() {
  }

  AddStory() {
    this.sprintStories.push(new Story( this.newStoryId , this.newStoryDescription , this.newStoryStartDate , this.newStoryEndDate));
  }

  ClearStory() {
    alert('button clicked');
  }

  OnSubmit() {
    alert('form submitted');
  }

  IsStoryCompleted(sprintStory) {
    return true;
  }
}
