import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) {
    // http://localhost:4200/api/articles.json
    http.get('/api/articles.json')
      .subscribe( (res) => {
        this.data = res.json();
      });
  }

  deleteArticle(item) {
    let idx = this.data.indexOf(item);
    this.data.splice(idx, 1);
  }

  data: any;
}
