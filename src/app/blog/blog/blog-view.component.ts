import { Component, OnInit } from "@angular/core";
import { GithubService } from "../services/github.service";
import { GithubContent } from "../services/model/github";

@Component({
  selector: "ld-blog-view",
  templateUrl: "./blog-view.component.html",
  styleUrls: ["./blog-view.component.scss"]
})
export class BlogViewComponent implements OnInit {
  private contentList: GithubContent[];
  private contentCount: number;

  constructor(private github: GithubService) {}

  ngOnInit() {
    this.github.getAllMDFiles().subscribe(data => {
      this.contentList = data;
      this.contentList.map(c => {
        c.name = c.name.split(".md")[0];
      });
      this.contentCount = data.length;
    });
  }
}
