import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared";
import { RouterModule } from '@angular/router';
import { HomeAuthResolver } from "./home-auth-resolver.service";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: "", component: HomeComponent,
      resolve: {
              isAuthenticated: HomeAuthResolver
            }}
    ])
  ],
  declarations: [HomeComponent],
  providers: [HomeAuthResolver]
})
export class HomeModule {}
