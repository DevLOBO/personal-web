import { MetaService } from './../services/meta.service';
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

  constructor(private staticRoutes: StaticRoutesService, private metaService: MetaService) {
    const title: string = 'Blog', description: string = 'Aquí encontrarás todas mis publicaciones, reflexiones, pensamientos y tutoriales que podrían ayudarte';
    metaService.setMetadata(title, description);
  }
}
