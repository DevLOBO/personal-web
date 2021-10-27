import { Injectable } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Route } from './../models/route.nav';

@Injectable({
  providedIn: 'root',
})
export class StaticRoutesService {
  constructor(private scullyService: ScullyRoutesService) {}

  getPublishedRoutes(start: string): Observable<Route[]> {
    return this.scullyService.available$.pipe(
      map((routes: Route[]) => routes.filter((r) => r.route.startsWith(start))),
      map(routes => routes.sort((r1, r2) => new Date(r2).getTime() - new Date(r1).getTime()))
    );
  }
}
