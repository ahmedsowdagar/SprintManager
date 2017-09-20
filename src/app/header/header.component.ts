import { Component, OnInit } from '@angular/core';
 import { Sprint } from '../../sprint.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sprint = new Sprint(84, 84, null, null, null, null, null, 60);
  constructor() { }

  ngOnInit() {
  }

}
