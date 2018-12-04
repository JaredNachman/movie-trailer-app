import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorSearchComponent } from './actor-search/actor-search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { MovieService } from './movie.service';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';




@NgModule({

  declarations: [
    AppComponent,
    ActorsComponent,
    ActorDetailComponent,
    ActorSearchComponent,
    NavigationComponent,
<<<<<<< HEAD
    FooterComponent,
    HomeComponent,
    SearchComponent,


=======
    FooterComponent
>>>>>>> parent of 73f5068... Feat: stage 1 final push

  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    HttpClientModule,
          FormsModule,
           
  ],
  providers: [ MovieService ],

=======
    AppRoutingModule
  ],
  providers: [],
>>>>>>> parent of 73f5068... Feat: stage 1 final push
  bootstrap: [AppComponent]
})
export class AppModule { }
