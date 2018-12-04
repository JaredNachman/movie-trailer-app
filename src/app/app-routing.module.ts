import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ActorsComponent }      from './actors/actors.component';
import { ActorDetailComponent }      from './actor-detail/actor-detail.component';



const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'detail/:id', component: ActorDetailComponent },
{ path: 'home', component: ActorsComponent }


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
