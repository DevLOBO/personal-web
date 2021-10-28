import {Component} from '@angular/core';
import { Observable } from 'rxjs';
import { StaticRoutesService } from './../services/static-routes.service';
import { Route } from '../models/route.nav';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  routes: Observable<Route[]> = this.staticRoutes.getPublishedRoutes('/blog');

  constructor(private staticRoutes: StaticRoutesService) {
  }
}
