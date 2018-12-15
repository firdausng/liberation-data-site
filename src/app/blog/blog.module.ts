import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from "ngx-markdown";
import { BlogViewComponent } from './blog/blog-view.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GithubService } from './services/github.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BlogViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: BlogViewComponent},
      {path: 'post', loadChildren: './post/blog-post.module#BlogPostViewModule'},
    ]),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [GithubService]
})
export class BlogModule { }
