import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorsComponent }      from './actors/actors.component';
import { ActorDetailComponent }      from './actor-detail/actor-detail.component';



const routes: Routes = [

  { path: 'actors', component: ActorsComponent },
  { path: 'actor-detail', component: ActorDetailComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
