import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PortfolioComponent} from './portfolio.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  },
  {
    path: ':title',
    component: ProjectComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}

