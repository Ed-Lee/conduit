import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SharedModule, AuthGuard } from '../shared';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]}
    ])
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
