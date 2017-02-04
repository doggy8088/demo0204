import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle = 'Hello Will';
  homeUrl = 'http://blog.miniasp.com/';
  pageSubtitle = '記載著 Will 在網路世界的學習心得與技術分享';

  constructor() { }

  ngOnInit() {
  }

  num = 0;

  plusOne(evt: MouseEvent) {
    console.log(evt);
    if(evt.ctrlKey) {
      this.num--;
    } else {
      this.num++;
    }
  }

  subtitleClasses() {
    return {
      'highlight': (this.num%2==1)
    };
  }
}
