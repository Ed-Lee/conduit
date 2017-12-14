import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { NoAuthGuard } from './no-auth-guard.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: AuthComponent,
        canActivate: [NoAuthGuard]
      },
      {
        path: 'register',
        component: AuthComponent,
        canActivate: [NoAuthGuard]
      }
    ])
  ],
  declarations: [AuthComponent],
  providers: [
    NoAuthGuard
  ]
})
export class AuthModule { }
