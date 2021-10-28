import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from './../../models/route.nav';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  @Input() routes!: Observable<Route[]>;

  constructor() { }
}
