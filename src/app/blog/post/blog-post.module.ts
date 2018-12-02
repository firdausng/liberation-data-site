import { NgModule } from "@angular/core";
import { BlogPostComponent } from "./blog-post.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MarkdownModule } from "ngx-markdown";

@NgModule({
    declarations: [BlogPostComponent],
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: BlogPostComponent},
        { path: ':id', component: BlogPostComponent, pathMatch: 'full'}
      ]),
      MarkdownModule.forChild()
    ]
  })
  export class BlogPostViewModule { }