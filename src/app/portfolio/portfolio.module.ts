import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioComponent} from './portfolio.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [PortfolioComponent, ProjectComponent],
  imports: [CommonModule, PortfolioRoutingModule, ScullyLibModule],
})
export class PortfolioModule {}
