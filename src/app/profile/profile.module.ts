import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile.component";
import { SharedModule } from "../shared";
import { RouterModule } from "@angular/router";
import { ProfileResolver } from "./profile-resolver.service";
import { ProfileArticlesComponent } from "./profile-articles.component";
import { ProfileFavoritesComponent } from "./profile-favorites.component";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "profile/:username",
        component: ProfileComponent,
        resolve: {
          profile: ProfileResolver
        },
        children: [
          {
            path: "",
            component: ProfileArticlesComponent
          },
          {
            path: "favorites",
            component: ProfileFavoritesComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    ProfileComponent,
    ProfileArticlesComponent,
    ProfileFavoritesComponent
  ],
  providers: [ProfileResolver]
})
export class ProfileModule {}
