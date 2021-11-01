import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import { PostComponent } from './post/post.component';
import { ComponentsModule } from './../components/components.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [BlogComponent, PostComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, ComponentsModule],
})
export class BlogModule {}
