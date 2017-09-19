import { Component, OnInit } from '@angular/core';
import { Story } from '../../../story.model';

@Component({
  selector: 'app-in-progress-stories',
  templateUrl: './in-progress-stories.component.html',
  styleUrls: ['./in-progress-stories.component.css']
})
export class InProgressStoriesComponent implements OnInit {
  stories: Story[] = [ new Story( 'story4' , 'story4 - description' , 'start date' , 'end date' ),
                      new Story( 'story5' , 'story5 - description' , 'start date' , 'end date' ),
                      new Story( 'story6' , 'story6 - description' , 'start date' , 'end date' ) ];

  constructor() { }

  ngOnInit() {
  }

}
