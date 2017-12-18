import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent } from './layout';
import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { FollowButtonComponent } from './buttons';

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
    FollowButtonComponent
  ],
  declarations: [FooterComponent, HeaderComponent, ListErrorsComponent, ShowAuthedDirective, FollowButtonComponent]
})
export class SharedModule { }
