import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import {ScullyLibModule} from '@scullyio/ng-lib';
import { ComponentsModule } from './../components/components.module';

import {PortfolioRoutingModule} from './portfolio-routing.module';

import {PortfolioComponent} from './portfolio.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [PortfolioComponent, ProjectComponent],
  imports: [CommonModule, PortfolioRoutingModule, ScullyLibModule, MatCardModule, MatDividerModule, MatButtonModule, MatChipsModule, ComponentsModule],
})
export class PortfolioModule {}
