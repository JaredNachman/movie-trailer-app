import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorSearchComponent } from './actor-search/actor-search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { MovieService } from './movie.service';

import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent } from './moviesearch/moviesearch.component';
import { SearchComponent } from './search/search.component';

@NgModule({

  declarations: [
    AppComponent,
    ActorsComponent,
    ActorDetailComponent,
    ActorSearchComponent,
    NavigationComponent,
    FooterComponent,
    MovieSearchComponent,
    SearchComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],

  providers: [MovieService],

  bootstrap: [AppComponent]
})
export class AppModule { }
