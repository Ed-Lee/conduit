import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent } from './layout';
import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { FollowButtonComponent } from './buttons';
import { ArticleMetaComponent } from './article-helpers/article-meta.component';
import { FavoriteButtonComponent } from './buttons/favorite-button.component';
import { ArticlePreviewComponent } from './article-helpers/article-preview.component';
import { ArticleListComponent } from './article-helpers/article-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FooterComponent,
    HeaderComponent,
    ListErrorsComponent,
    ShowAuthedDirective,
    FollowButtonComponent,
    ArticleMetaComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
    FavoriteButtonComponent
  ],
  declarations: [FooterComponent, HeaderComponent, ListErrorsComponent, ShowAuthedDirective, FollowButtonComponent, ArticleMetaComponent, FavoriteButtonComponent, ArticlePreviewComponent, ArticleListComponent]
})
export class SharedModule { }
