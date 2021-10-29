import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../../models/route.nav';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: [
  ]
})
export class ArticleComponent {
  @Input() route!: Observable<Route | undefined>;

  constructor() { }
}
