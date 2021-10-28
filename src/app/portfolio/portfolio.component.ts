import { Component } from '@angular/core';
import { Route } from './../models/route.nav';
import { StaticRoutesService } from './../services/static-routes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  routes: Observable<Route[]> = this.staticRoutes.getPublishedRoutes('/portfolio');
  
  constructor(private staticRoutes: StaticRoutesService) { }
}
