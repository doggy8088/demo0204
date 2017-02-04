import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'app works!';

  data: any;

  doSearch(str) {
    console.log(str);
    this.keyword = str;
  }
}
