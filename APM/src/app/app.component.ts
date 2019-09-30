

import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div><h2>{{ pageTitle }}</h2>
            <comp-customers></comp-customers>
            </div>`
})
export class AppComponent {
  pageTitle: string = "Denem111e";
}





/*
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
*/