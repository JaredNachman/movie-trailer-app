import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }      from './app/app.component';
import { ActorsComponent }      from './actors/actor.component';
import { ActorDetailComponent } }      from './actor-detail/actor-detail.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'actors', component: ActorsComponent },
  { path: 'actor-detail', component: ActorDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
