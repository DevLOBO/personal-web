import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '../../models/route.nav';
import { StaticRoutesService } from './../../services/static-routes.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: [
  ]
})
export class ProjectComponent implements OnInit {
  route!: Observable<Route | undefined>;

  constructor(private staticRoutes: StaticRoutesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.pipe(pluck('title')).subscribe(title => this.route = this.staticRoutes.getRoute('/portfolio', title));
  }
}
