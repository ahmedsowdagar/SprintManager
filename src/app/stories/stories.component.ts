import { Component, OnInit } from '@angular/core';
import { Story } from '../../story.model';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  stories: Story[] = [ new Story( 'story1' , 'story5' , 'story5' , 'story5' ),
                        new Story( 'story2' , 'story6' , 'story6' , 'story6' ),
                        new Story( 'story3' , 'story7' , 'story7' , 'story7' ) ];

  constructor() { }

  ngOnInit() {
  }

  AddStory() {
  }

}
