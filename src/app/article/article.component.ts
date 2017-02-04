import { Input, Output, EventEmitter, Component,  OnInit, OnDestroy } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input()
  item: any;

	constructor(public datasvc: DataService) {
	}

}
