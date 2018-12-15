import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubContent } from './model/github';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  getAllMDFiles(): Observable<GithubContent[]>{
    return this.http.get<GithubContent[]>("https://api.github.com/repos/firdausng/liberation-data-site/contents/src/assets/blog/post");
  }
}
