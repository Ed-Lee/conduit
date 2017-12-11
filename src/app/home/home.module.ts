import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared";
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: "", component: HomeComponent}
    ])
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
