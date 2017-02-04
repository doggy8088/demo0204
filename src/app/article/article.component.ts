import { Input, Output, EventEmitter, Component,  OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  @Input()
  item: any;

  @Output()
  delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
  }

  deleteMe(item) {
    this.delete.emit(item);
  }

}
