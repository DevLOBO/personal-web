import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticRoutesService } from './../../services/static-routes.service';
import { MetaService } from './../../services/meta.service';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Route } from '../../models/route.nav';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [
  ]
})
export class PostComponent implements OnInit {
  route!: Observable<Route | undefined>;

  constructor(private metaService: MetaService, private staticRoutes: StaticRoutesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(pluck('title')).subscribe(title => this.route = this.staticRoutes.getRoute('/blog', title));
    this.route.subscribe(route => this.metaService.setMetadata(route?.title, route?.description, route?.createdAt));
  }

}
