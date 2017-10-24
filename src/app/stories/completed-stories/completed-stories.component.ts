import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../../story.model';

@Component({
  selector: 'app-completed-stories',
  templateUrl: './completed-stories.component.html',
  styleUrls: ['./completed-stories.component.css']
})
export class CompletedStoriesComponent implements OnInit {
   @Input() completed: Story;
     public labels = ['Planned', 'Actual'];
     public data = [
        ['10'],
        ['20']
      ];
  public options = {
          scales: {
              xAxes: [{
                  stacked: true
              }],
              yAxes: [{
                  stacked: true
              }]
          },
          legend: {
              display: true,
              labels: {
                  fontColor: 'rgb(255, 99, 132)'
              }
          },
          title: {
              display: false,
          }

          // Chart.js options can go here.
      };
  constructor() { }

  ngOnInit() {
  }

}
