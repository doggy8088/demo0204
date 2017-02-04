import { Input, Output, EventEmitter, Component,  OnInit, OnDestroy } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  @Input()
  item: any;

	constructor(private datasvc: DataService) {
	}

  ngOnInit() {
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
  }

  deleteMe(item) {
    this.datasvc.deleteArticle(item);
  }

}
