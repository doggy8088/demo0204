import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle = 'Hello Will';
  homeUrl = 'http://blog.miniasp.com/';
  pageSubtitle = '記載著 <strong>Will</strong> 在網路世界的學習心得與技術分享';

  constructor() { }

  ngOnInit() {
  }

}
