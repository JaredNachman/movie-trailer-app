import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorSearchComponent } from './actor-search/actor-search.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({

  declarations: [
    AppComponent,
    ActorsComponent,
    ActorDetailComponent,
    ActorSearchComponent,
    NavigationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
