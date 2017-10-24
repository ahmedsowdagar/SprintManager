import { Component, OnInit } from '@angular/core';
 import { Sprint } from '../../sprint.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sprint84 = null;
  constructor() {
    this.sprint84 = new Sprint(84,
                                84,
                                new Date(2017, 9, 18),
                                new Date(2017, 9, 18),
                                new Date(2017, 9, 18),
                                new Date(2017, 9, 18),
                                19,
                                60);
   }

  ngOnInit() {
  }

}
