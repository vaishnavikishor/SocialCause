import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CommunityeventComponent } from './communityevent/communityevent.component';
import { SocialeventComponent } from './socialevent/socialevent.component';




const routes: Routes = [
  {path: '',component:HomepageComponent},
  {path: 'homepage',component:HomepageComponent},
  {path: 'communitywork',component:CommunityeventComponent},
  {path: 'socialevent',component:SocialeventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
