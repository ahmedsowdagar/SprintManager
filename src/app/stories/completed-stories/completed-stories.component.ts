import { Component, OnInit } from '@angular/core';
import { Story } from '../../../story.model';

@Component({
  selector: 'app-completed-stories',
  templateUrl: './completed-stories.component.html',
  styleUrls: ['./completed-stories.component.css']
})
export class CompletedStoriesComponent implements OnInit {
  stories: Story[] = [ new Story( 'story1' , 'story1 - description' , 'start date' , 'end date' ),
                        new Story( 'story2' , 'story2 - description' , 'start date' , 'end date' ),
                        new Story( 'story3' , 'story3 - description' , 'start date' , 'end date' ) ];
  
  constructor() { }

  ngOnInit() {
  }

}
