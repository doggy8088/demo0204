import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'app works!';

  data: any;

	constructor(private datasvc: DataService) {
    this.data = datasvc.data;
	}

  doSearch(str) {
    console.log(str);
    this.keyword = str;
  }

}
