import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { ProfileResolver } from './profile-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot([
      { path: 'profile/:username', component: ProfileComponent, resolve: {
        profile: ProfileResolver
      }}
    ])
],
  declarations: [ProfileComponent],
  providers: [
    ProfileResolver
  ]
})
export class ProfileModule { }
