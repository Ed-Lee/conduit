import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { ApiService } from "./api.service";
import { Article, ArticleListConfig } from "../models";
import { HttpParams } from "@angular/common/http";

@Injectable()
export class ArticlesService {
  constructor(private apiService: ApiService) {}

  get(slug): Observable<Article> {
    return this.apiService.get("/articles/" + slug).map(data => data.article);
  }

  query(
    config: ArticleListConfig
  ): Observable<{ articles: Article[]; articlesCount: number }> {
    // HttpParams : This class is immutable - all mutation operations return a new instance.
    let params: HttpParams = new HttpParams();


    Object.keys(config.filters).forEach(key => {
      params = params.set(key, config.filters[key]); //因為HttpParams is immutable
    });

    //console.log('params = ', params.toString());


    return this.apiService
      .get("/articles" + (config.type === "feed" ? "/feed" : ""), params)
      .map(data => data);
  }

  save(article): Observable<Article> {
    // If we're updating an existing article
    if (article.slug) {
      return this.apiService
        .put("/articles/" + article.slug, { article: article })
        .map(data => data.article);

      // Otherwise, create a new article
    } else {
      return this.apiService
        .post("/articles/", { article: article })
        .map(data => data.article);
    }
  }

  destroy(slug) {
    return this.apiService.delete("/articles/" + slug);
  }

  favorite(slug): Observable<Article> {
    return this.apiService.post("/articles/" + slug + "/favorite");
  }

  unfavorite(slug): Observable<Article> {
    return this.apiService.delete("/articles/" + slug + "/favorite");
  }
}
