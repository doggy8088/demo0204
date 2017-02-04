import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'app works!';

	constructor(public datasvc: DataService) {
	}

  doSearch(str) {
    console.log(str);
    this.keyword = str;
  }

}
