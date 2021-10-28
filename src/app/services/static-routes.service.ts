import { Injectable } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Route } from './../models/route.nav';

@Injectable({
  providedIn: 'root',
})
export class StaticRoutesService {
  constructor(private scullyService: ScullyRoutesService, private activatedRoute: ActivatedRoute) {}

  getRoute(start: string): Observable<Route | undefined> {
return combineLatest([
  this.activatedRoute.params.pipe(pluck('title')),
  this.scullyService.available$
]).pipe(
  map(([title, routes]) => routes.find((route: Route) => route.route === `${start}/${title}`))
);
  }

  getPublishedRoutes(start: string): Observable<Route[]> {
    return this.scullyService.available$.pipe(
      map((routes: Route[]) => routes.filter((r) => r.route.startsWith(`${start}/`) && r.sourceFile?.endsWith('.md'))),
      map(routes => routes.sort((r1, r2) => new Date(r2.createdAt?.toString() || '2021-11-10').getTime() - new Date(r1.createdAt?.toString() || '2021-11-10').getTime()))
    );
  }
}
