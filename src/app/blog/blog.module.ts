import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import { PostComponent } from './post/post.component';
import { ComponentsModule } from './../components/components.module';

@NgModule({
  declarations: [BlogComponent, PostComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule, ComponentsModule],
})
export class BlogModule {}
