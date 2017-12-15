import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule, ApiService, UserService, JwtService, AuthGuard } from './shared';
import { FooterComponent } from './shared/layout/footer.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    AuthModule,
    SettingsModule,
    RouterModule.forRoot([], {useHash: true})
  ],
  providers: [ApiService, UserService, JwtService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
