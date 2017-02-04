import { Input, Output, EventEmitter, Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  item: any;

  @Output()
  delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  deleteMe(item) {
    this.delete.emit(item);
  }

}
