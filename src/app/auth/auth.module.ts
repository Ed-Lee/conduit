import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'login', component: AuthComponent},
      {path: 'register', component: AuthComponent}
    ])
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
